import { Injectable } from '@angular/core';
import { https } from '@build-5/client';
import { Dataset, Member } from '@build-5/interfaces';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private client = https(environment.build5Env).project(environment.build5Token).dataset(Dataset.MEMBER);
  getOne(id: string): Observable<Member | undefined> {
    return from(this.client.id(id).get());
  }

  createIfNotExists(address: string): Promise<Member | undefined> {
    return https(environment.build5Env).createMember({
      address,
      projectApiKey: environment.build5Token,
      body: {
        address,
      },
    });
  }
}
