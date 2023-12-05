import { Component, OnInit } from '@angular/core';
import { Nft } from '@build-5/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { EventLogService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';
import { NftService } from '../../services/nft.service';

@UntilDestroy()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$: BehaviorSubject<Nft[] | undefined> = new BehaviorSubject<Nft[] | undefined>(undefined);
  constructor(
    private nftService: NftService,
    private log: EventLogService,
  ) {}

  public ngOnInit(): void {
    // TODO Add pagination and virtual scroll
    this.log.add('Loading available NFTs for sale within collection: ' + environment.collection.slice(0, 9) + '...');
    if (environment.mode === 'auction') {
      this.nftService.getByCollectionAvailableForAuctionLive(environment.collection).pipe(untilDestroyed(this)).subscribe(this.products$);
    } else {
      this.nftService.getByCollectionAvailableForSaleLive(environment.collection).pipe(untilDestroyed(this)).subscribe(this.products$);
    }
  }
}
