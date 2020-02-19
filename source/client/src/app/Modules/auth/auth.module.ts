import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { FormLogInComponent } from './../../Forms/form-log-in/form-log-in.component';
import { FormForgotPassComponent } from './../../Forms/form-forgot-pass/form-forgot-pass.component';

@NgModule({
  declarations: [
    FormLogInComponent,
    FormForgotPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
