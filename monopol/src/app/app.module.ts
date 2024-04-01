import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertiesModule } from './properties/properties.module';
import { appInterceptorPrivoder } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ErrorComponent } from './core/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthenticateComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    UserModule,
    CatalogModule,
    SharedModule,
    PropertiesModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorPrivoder],
  bootstrap: [AppComponent],
})
export class AppModule {}
