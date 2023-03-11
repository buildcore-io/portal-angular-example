import { SoonEnv } from '@soonaverse/lib';
import { from, Observable } from 'rxjs';

export class BaseService<T, K> {
  protected repo: K;

  constructor(repository: any) {
    this.repo = new repository(SoonEnv.PROD);
  }

  getOne(id: string): Observable<T | undefined> {
    return from(<Observable<T | undefined>>(<any>this.repo).getById(id));
  }
}
