import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventLogService {
  public events$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public add(s: string): void {
    this.events$.next([...this.events$.value, s]);
  }
}
