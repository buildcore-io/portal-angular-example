import { Component } from '@angular/core';
import { https } from '@build-5/client';
import { Build5 } from '@build-5/client/lib/https';
import { Collection, Dataset, NftAvailable, Subset } from '@build-5/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectionService } from './services/collection.service';
import { UserService } from './services/user.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public collection$: BehaviorSubject<Collection | undefined> = new BehaviorSubject<Collection | undefined>(undefined);
  constructor(private collectionService: CollectionService, private user: UserService) {}

  public ngOnInit(): void {
    this.enableConsoleDebuggingForBuild5Lib();
    this.collectionService.getOne(environment.collection).pipe(untilDestroyed(this)).subscribe(this.collection$);
  }

  public enableConsoleDebuggingForBuild5Lib():void {
    // Make few things public for testing and debugging
    (<any>window).build5 = https(Build5.TEST);
    (<any>window).Dataset = Dataset;
    (<any>window).Subset = Subset;
    (<any>window).NftAvailable = NftAvailable;
    (<any>window).signWithMetamask = (v: any, projectApiKey = environment.build5Token) => {
      return this.user.signWithMetamask(v, projectApiKey);
    };
  }

  public showAuction(): boolean {
    return environment.mode === 'auction';
  }
}
