import { Component, Input } from '@angular/core';
import { FILE_SIZES, Nft } from '@soonaverse/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() nft: Nft | undefined;
  public getUrl(org: string, size?: FILE_SIZES): string {
    const extensionPat = /\.[^/.]+$/;
    const ext = org.match(extensionPat)?.[0]?.replace('.', '_');
    return org.replace(extensionPat, ext + '_' + size + '.webp');
  }

  public medSizeImg(org?: string): string {
    if (!org) return '';

    return this.getUrl(org, FILE_SIZES.medium);
  }
}
