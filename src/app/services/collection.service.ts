import { Injectable } from '@angular/core';
import { Collection, CollectionRepository } from '@soonaverse/lib';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CollectionService extends BaseService<Collection, CollectionRepository> {
  constructor() {
    super(CollectionRepository);
  }
}
