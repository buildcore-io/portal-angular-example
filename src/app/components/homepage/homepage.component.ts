import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Collection } from '@soonaverse/interfaces';
import { BehaviorSubject } from 'rxjs';
import { CollectionService } from 'src/app/services/collection.service';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public collection$: BehaviorSubject<Collection | undefined> = new BehaviorSubject<
    Collection | undefined
  >(undefined);
  constructor(private collectionService: CollectionService) {}

  public ngOnInit(): void {
    this.collectionService
      .getOne(environment.collection)
      .pipe(untilDestroyed(this))
      .subscribe(this.collection$);
  }
}
