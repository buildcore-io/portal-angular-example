import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Nft } from '@soonaverse/interfaces';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NftService } from '../../services/nft.service';

@UntilDestroy()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$: BehaviorSubject<Nft[] | undefined> = new BehaviorSubject<Nft[] | undefined>(
    undefined,
  );
  constructor(private nftService: NftService) {}

  public ngOnInit(): void {
    // TODO Add pagination and virtual scroll
    if (environment.mode === 'auction') {
      this.nftService
        .getByCollectionAvailableForAuction(environment.collection)
        .pipe(untilDestroyed(this))
        .subscribe(this.products$);
    } else {
      this.nftService
        .getByCollectionAvailableForSale(environment.collection)
        .pipe(untilDestroyed(this))
        .subscribe(this.products$);
    }
  }
}
