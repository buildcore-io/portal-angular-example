import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OtrExampleComponent } from './components/otr-example/otr-example.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { UnitFormatPipe } from './utils/format.utils';

@NgModule({
  declarations: [AppComponent, HomepageComponent, ProductsComponent, ProductComponent, OtrExampleComponent, UnitFormatPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
