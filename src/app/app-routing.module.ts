import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent
  },
  {path: 'listadoEntidad' , component: ControlEntidadComponent},
  {path: 'controlEntidad' , component: ControlEntidadComponent}


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule,BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
