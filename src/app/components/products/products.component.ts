import { Component, OnInit } from '@angular/core';
import { Nft } from '@soonaverse/interfaces';
import { BehaviorSubject, Subject } from 'rxjs';
import { NftService } from '../../services/nft.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$: BehaviorSubject<Nft[] | undefined> = new BehaviorSubject<Nft[] | undefined>([]);
  constructor(private nftService: NftService) {}

  public ngOnInit(): void {
    this.nftService
      .getByCollection(environment.collection)
      .pipe(untilDestroyed(this))
      .subscribe(this.products$);
  }
}
