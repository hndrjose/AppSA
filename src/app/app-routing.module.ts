import { NgModule } from '@angular/core';

// Modulos
import { RouterModule, Routes } from '@angular/router';
import { PageAppRoutingModule } from './pages/pages.routing';
import { InfoAppRoutingModule } from './infoapp/infoapp.routing';


// Paginas
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { LoginComponent } from './infoapp/login/login.component';

const router: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( router ),
    PageAppRoutingModule,
    InfoAppRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
