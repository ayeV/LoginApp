import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, NgModel} from  '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { PrincipalComponent } from './components/principal/principal.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ModificacionComponent } from './componentes/modificacion/modificacion.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListadoComponent,
    BorrarComponent,
    DetalleComponent,
    ModificacionComponent
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
