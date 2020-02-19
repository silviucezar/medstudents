import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLogInComponent } from './../../Forms/form-log-in/form-log-in.component';
import { FormForgotPassComponent } from './../../Forms/form-forgot-pass/form-forgot-pass.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'login',
    component: FormLogInComponent
  },
  {
    path: 'forgot-pass',
    component: FormForgotPassComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
