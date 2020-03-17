import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecretaryComponent } from './components/home/secretary.component';

const routes: Routes = [{ path: '', component: SecretaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
