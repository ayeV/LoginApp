import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalComponent } from './components/principal/principal.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {
    path: '',
    redirectTo: '/bienvenido',
    pathMatch: 'full'
  },
 {
   path: 'busqueda',
   component: BusquedaComponent
 },
 {
  path: 'peliculas/alta',
  component: PeliculaAltaComponent
},

{
  path: 'actor/alta',
  component: ActorAltaComponent
},
{
  path: 'actor/listado',
  component: ActorListadoComponent
},
{
  path: 'peliculas/listado',
  component: PeliculaListadoComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
