import { Injectable } from '@angular/core';
import { https } from '@build-5/client';
import { Dataset, Transaction } from '@build-5/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private client = https(environment.build5Env).dataset(Dataset.TRANSACTION);
  getOneLive(id: string): Observable<Transaction> {
    return <Observable<Transaction>>this.client.id(id).getLive();
  }
}
