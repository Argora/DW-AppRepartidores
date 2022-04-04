import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetallesOrdenComponent } from './components/detalles-orden/detalles-orden.component';
import { OrdenesCompletadasComponent } from './components/ordenes-completadas/ordenes-completadas.component';
import { OrdenesAceptadasComponent } from './components/ordenes-aceptadas/ordenes-aceptadas.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    DetallesOrdenComponent,
    OrdenesCompletadasComponent,
    OrdenesAceptadasComponent,
    MapaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
