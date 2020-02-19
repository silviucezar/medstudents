import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './Modules/auth/auth.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { Token } from './Modules/auth/Token'

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    CarouselComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: Token,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
