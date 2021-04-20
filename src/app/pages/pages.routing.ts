import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageComponent } from './page.component';

// Paginas
import { OrdenesComponent } from './compras/ordenes/ordenes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LisclientesComponent } from './clientes/lisclientes.component';


const router: Routes = [
    {
        path: 'dashboard',
        component: PageComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'ordenes', component: OrdenesComponent },
          { path: 'listcliente', component: LisclientesComponent}
          //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
          
      ]
   }
    
  ];
    
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( router )
    ],
    exports: [
      RouterModule
    ]
  })
  export class PageAppRoutingModule { }
