import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryRoutingModule } from './secretary-routing.module';
import { SecretaryComponent } from './components/secretary.component';


@NgModule({
  declarations: [SecretaryComponent],
  imports: [
    CommonModule,
    SecretaryRoutingModule
  ]
})
export class SecretaryModule { }
