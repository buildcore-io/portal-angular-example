import { Component, Input } from '@angular/core';
import { FILE_SIZES, Nft, Transaction, TransactionType } from '@build-5/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import dayjs from 'dayjs';
import { BehaviorSubject } from 'rxjs';
import { EventLogService } from 'src/app/services/event.service';
import { NftService } from 'src/app/services/nft.service';
import { TransactionService } from 'src/app/services/transaction.service';

@UntilDestroy()
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() nft: Nft | undefined;
  public getUrl(org: string, size?: FILE_SIZES): string {
    const extensionPat = /\.[^/.]+$/;
    const ext = org.match(extensionPat)?.[0]?.replace('.', '_');
    return org.replace(extensionPat, ext + '_' + size + '.webp');
  }

  constructor(private nftService: NftService, private log: EventLogService, private tranService: TransactionService) {
    // none.
  }

  public medSizeImg(org?: string): string {
    if (!org) return '';

    return this.getUrl(org, FILE_SIZES.medium);
  }

  public monitorOrderProgress(id: string): void {
    const listeningToTransaction: string[] = [];
    const linkedTransactions$: BehaviorSubject<Transaction | undefined> = new BehaviorSubject<
      Transaction | undefined
    >(undefined);

    linkedTransactions$.subscribe((val) => {
      // Ignore delete or empty
      if (!val) {
        return;
      }

      if (val.type === TransactionType.PAYMENT) {
        this.log.add('Received payment for ' + ((val.payload.amount || 0) / 1000 / 1000) + ' ' + val.network.toUpperCase());
        if (val.payload.invalidPayment === false) {
          this.log.add('Payment has been considered invalid. Refund initiated.');
        }
      } 
   
      if (val.type === TransactionType.CREDIT) {
        if (val.payload.reconciled === true) {
          this.log.add('Credit issued and reconciled.');
        }
      }

      if (val.type === TransactionType.BILL_PAYMENT) {
        this.log.add('Bill Payment issued. Previous owner / Royalties paid.');
      }

    });
    
    // Let's monitor order to understand progress of the transaction.
    this.tranService.getOneLive(id).pipe(untilDestroyed(this)).subscribe((val) => {
      if (val && val.type === TransactionType.ORDER) {
        const expiresOn: dayjs.Dayjs = dayjs(val.payload.expiresOn!.toDate());
        if (expiresOn.isBefore(dayjs()) || val.payload?.void) {
          this.log.add('Order has expired. Any funds will now be refunded.')
        }
        if (val.linkedTransactions && val.linkedTransactions?.length > 0) {
          // Listen to other transactions.
          for (const tranId of val.linkedTransactions) {
            if (listeningToTransaction.indexOf(tranId) > -1) {
              continue;
            }

            listeningToTransaction.push(tranId);
            this.tranService.getOneLive(id).pipe(untilDestroyed(this)).subscribe(<any>linkedTransactions$);
          }
        }
        if (val.payload.reconciled === true) {
          this.log.add('NFT Sold to user ' + val.member);
        }
      }
    });
  }

  public async signAndBuy(id: string): Promise<void> {
    try {
      const tran = await this.nftService.order(id);
      this.log.add('Order created. Sent ' + ((tran.payload.amount || 0) / 1000 / 1000) + ' ' + tran.network.toUpperCase() +' to ' + tran.payload.targetAddress);
      this.monitorOrderProgress(tran.uid);
    } catch (e: any) {
      this.log.add('ERRROR: ' + e.key)
    }
  }
}
