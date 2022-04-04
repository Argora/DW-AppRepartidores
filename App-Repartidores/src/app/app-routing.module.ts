import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesOrdenComponent } from './components/detalles-orden/detalles-orden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { OrdenesAceptadasComponent } from './components/ordenes-aceptadas/ordenes-aceptadas.component';
import { OrdenesCompletadasComponent } from './components/ordenes-completadas/ordenes-completadas.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'login' ,component: LoginComponent},
  {path:'ordenes' ,component: HomeComponent},
  {path:'ordenes/detalles/:id', component: DetallesOrdenComponent},
  {path:'ordenes/aceptadas', component: OrdenesAceptadasComponent},
  {path:'ordenes/completadas', component: OrdenesCompletadasComponent},
  {path:'registro', component: RegistroComponent},
  {path:'mapa', component: MapaComponent},
  {path:'**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
