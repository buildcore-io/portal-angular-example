import { Component, OnInit } from '@angular/core';
import { https, otr } from '@build-5/client';
import { Build5 } from '@build-5/client/https';
import { Build5OtrAddress } from '@build-5/client/otr';
import { Dataset } from '@build-5/interfaces';
import { UntilDestroy } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'otr-example',
  templateUrl: './otr-example.component.html',
  styleUrls: ['./otr-example.component.scss'],
})
export class OtrExampleComponent implements OnInit {
  public amountTreeo: number = 3;
  public url: string = '';
  constructor(
  ) {}

  public async ngOnInit(): Promise<void> {
    const request = await otr(Build5OtrAddress.TEST).dataset(Dataset.TOKEN).buyToken({
      symbol: 'TREEO',
      count:  this.amountTreeo * 1000 * 1000,
      price: 10
    });
    this.url = request.getFireflyDeepLink().replace('firefly', 'firefly-alpha'); // .replace('&amount=500000', '&amount=2500000');
    const trackingTag = request.getTag(this.url);
    console.clear();
    console.log('\n\nTracking of progress:');
    https(Build5.TEST).project(environment.build5Token).trackByTag(trackingTag).subscribe((v) => {
      console.log(v);
    })
    // console.log('Deep Link URL: ', this.url);
  }
}
