import { Injectable } from '@angular/core';
import { https } from '@build-5/client';
import { Collection, Dataset } from '@build-5/interfaces';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private client = https(environment.build5Env).dataset(Dataset.COLLECTION);
  getOne(id: string): Observable<Collection | undefined> {
    return from(this.client.id(id).get());
  }
}
