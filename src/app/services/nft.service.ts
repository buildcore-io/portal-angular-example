import { Injectable } from '@angular/core';
import { Nft, NftAvailable, NftRepository } from '@soonaverse/lib';
import { from, Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class NftService extends BaseService<Nft, NftRepository> {
  constructor() {
    super(NftRepository);
  }

  getByCollection(col: string): Observable<Nft[] | undefined> {
    return from(this.repo.getByField('collection', col));
  }

  getByCollectionAvailableForSale(col: string): Observable<Nft[] | undefined> {
    return from(this.repo.getByField(['collection', 'available'], [col, NftAvailable.SALE]));
  }

  getByCollectionAvailableForAuction(col: string): Observable<Nft[] | undefined> {
    return from(this.repo.getByField(['collection', 'available'], [col, NftAvailable.AUCTION]));
  }
}
