import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';

const router: Routes = [
  { path: 'login', component: LoginComponent},
  
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( router )
  ],
  exports: [
    RouterModule
  ]
})
export class InfoAppRoutingModule { }