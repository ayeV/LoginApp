import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/album',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {path: 'listadoEntidad' , component: ControlEntidadComponent},
  {path: 'detalleEntidad' , component: DetalleEntidadComponent}


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
