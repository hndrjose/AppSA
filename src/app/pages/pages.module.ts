import { NgModule } from '@angular/core';

// Rutas
import { PageAppRoutingModule } from './pages.routing';

// Shared
import { HeaderComponent } from '../shared/header/header.component';
import { SidebardComponent } from '../shared/sidebard/sidebard.component';

// Paginas
import { OrdenesComponent } from './compras/ordenes/ordenes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { LisclientesComponent } from './clientes/lisclientes.component';
import { UpordenesComponent } from './compras/upordenes/upordenes.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
     declarations: [
        PageComponent,
        HeaderComponent,
        SidebardComponent,
        OrdenesComponent,
        DashboardComponent,
        LisclientesComponent,
        UpordenesComponent,
        NopagefoundComponent
     ],
     imports: [
      PageAppRoutingModule
     ],
     exports: [
        PageComponent,
        DashboardComponent,
        AppRoutingModule
     ]

})



export class PageModule { }
