import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'secretary', loadChildren: () => import('./Modules/secretary/secretary.module').then(m => m.SecretaryModule) },
  { path: 'student', loadChildren: () => import('./Modules/student/student.module').then(m => m.StudentModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
