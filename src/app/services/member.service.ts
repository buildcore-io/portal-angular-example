import { Injectable } from '@angular/core';
import { https } from '@build-5/client';
import { Dataset, Member } from '@build-5/interfaces';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private client = https(environment.build5Env).dataset(Dataset.MEMBER);
  getOne(id: string): Observable<Member | undefined> {
    return from(this.client.id(id).get());
  }

  createIfNotExists(address: string): Promise<Member | undefined> {
    return this.client.create({
      address,
      projectApiKey: environment.build5Token,
      body: {
        address,
      },
    });
  }
}
