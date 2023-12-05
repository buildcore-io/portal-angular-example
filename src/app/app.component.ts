import { Component } from '@angular/core';
import { Collection } from '@build-5/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectionService } from './services/collection.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public collection$: BehaviorSubject<Collection | undefined> = new BehaviorSubject<Collection | undefined>(undefined);
  constructor(private collectionService: CollectionService) {}

  public ngOnInit(): void {
    this.collectionService.getOne(environment.collection).pipe(untilDestroyed(this)).subscribe(this.collection$);
  }

  public showAuction(): boolean {
    return environment.mode === 'auction';
  }
}
