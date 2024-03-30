import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SalesComponent } from './sales/sales.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    AboutUsComponent,
    SalesComponent,
    PropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
