import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule, NgModel} from  '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';
import { BotonEntidadComponent } from './components/boton-entidad/boton-entidad.component';
import { AlbumComponent } from './components/album/album.component';
import { PaisesBanderaComponent } from './components/paises-bandera/paises-bandera.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { PrincipalComponent } from './components/principal/principal.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    BienvenidoComponent,
    DetalleEntidadComponent,
    BotonEntidadComponent,
    AlbumComponent,
    PaisesBanderaComponent,
    RegionesComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
