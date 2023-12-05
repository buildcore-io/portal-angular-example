import { Injectable } from '@angular/core';
import { https } from '@build-5/client';
import { Dataset, Nft, NftAvailable, Transaction } from '@build-5/interfaces';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class NftService {
  private client = https(environment.build5Env).dataset(Dataset.NFT);
  constructor(private user: UserService) {}
  async order(nftId: string): Promise<Transaction> {
    const d = await this.user.signWithMetamask({
      collection: environment.collection,
      nft: nftId,
    });

    return this.client.order(d);
  }
  getByCollection(col: string): Observable<Nft[] | undefined> {
    return from(this.client.getByField('collection', col));
  }

  getByCollectionAvailableForSaleLive(col: string): Observable<Nft[] | undefined> {
    return from(this.client.getByFieldLive(['collection', 'available'], [col, NftAvailable.SALE]));
  }

  getByCollectionAvailableForAuctionLive(col: string): Observable<Nft[] | undefined> {
    return from(this.client.getByFieldLive(['collection', 'available'], [col, NftAvailable.AUCTION]));
  }
}
