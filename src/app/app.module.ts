import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


// Paginas
import { AppComponent } from './app.component';
import { LoginComponent } from './infoapp/login/login.component';
import { PageModule } from './pages/pages.module';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
