import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/servicios/http-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  subscription: Subscription;

  public personas;
  public personaBorrar;
  public personaModificar;
  public personaDetalle;

  constructor(private service: HttpServiceService) {

    this.subscription = this.service.getNotification().subscribe(data => {
      if (data) {
        this.personas = this.service.getData();
      }
    });
  }

  ngOnInit(): void {
  }

  enviarABorrar(entidad) {
    this.personaBorrar = entidad;
  }

  enviarAModificar(entidad) {

    this.personaModificar = entidad;
  }

  enviarADetalle(entidad) {
    this.personaDetalle = entidad;
  }

  limpiar(entidad) {
    this.personaDetalle = null;
  }

  borrar(entidad) {
    this.personas = this.personas.filter(x => {
      return x.id != entidad.id;
    });
    this.personaBorrar = null;
  }

  modificar(entidad) {
    let listaModificada = [];
    for (let i = 0; i < this.personas.length; i++) {
      if(this.personas[i].id == entidad.id)
      {
        listaModificada.push(entidad);
      }
      else{
        listaModificada.push(this.personas[i]);
      }
      
    }
    this.personas = listaModificada;
  }

}
