import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { BannerComponent } from '../components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
