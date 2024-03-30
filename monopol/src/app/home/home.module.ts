import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-current/home.component';
import { SalesComponent } from './sales/sales.component';
import { PropertiesComponent } from './properties/properties.component';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    SalesComponent,
    PropertiesComponent,
    HeroComponent,
    AboutUsComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
