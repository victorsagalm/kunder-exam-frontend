import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule(
    { 
        declarations: [
            HomeComponent, 
            BannerComponent, NavbarComponent], 
        imports: [], 
        exports: [
            HomeComponent]
    })
export class ComponentsModule {}
