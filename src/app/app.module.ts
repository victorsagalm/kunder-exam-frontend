import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { BannerComponent } from '../components/banner/banner.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductsService } from '../services/products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
