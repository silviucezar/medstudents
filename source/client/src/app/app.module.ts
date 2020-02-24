import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AuthModule } from './Modules/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { Token } from './Modules/auth/Token';
import { DebugComponent } from './debug/debug/debug.component'

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    CarouselComponent,
    HeaderComponent,
    NavbarComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Token,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
