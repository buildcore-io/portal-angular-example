import { Injectable } from '@angular/core';
import { Nft, NftRepository } from '@soonaverse/lib';
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
}
