import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  public actores: Actor[];
  public actorDetalle;
  public actorBorrar;
  public actorModificar;
  public borrado = 1;
  public estaBorrando = false;
  public message;


  constructor(public db: FirestoreService) { }

  ngOnInit(): void {
    this.getData();
  }


  enviarABorrar(entidad) {
    this.actorBorrar = entidad;
  }

  enviarAModificar(entidad) {

    this.actorModificar = entidad;
  }

  enviarADetalle(entidad) {
    this.actorDetalle = entidad;
  }

  
  getData() {
    let pics = [];
    this.db.getActores().subscribe(x => {
      x.forEach(item => {
        pics.push(
          new Actor(item.id, item.data().nombre, item.data().apellido, item.data().fechaNac, item.data().foto, item.data().sexo,item.data().pais)
        );
      });
      this.actores = pics;
      console.log(this.actores)

    });
  }


  limpiar(entidad) {
    this.actorDetalle = null;
  }



  borrar(entidad) {
     this.estaBorrando = true;
     this.db.borrarActor(entidad.id).then(() => {
      this.actores = this.actores.filter((x) => {
        return x.id != entidad.id;
      });
      this.limpiar(entidad);
      this.estaBorrando = false;
    }); 
  }


  modificar(entidad)
  {
    this.estaBorrando = true;
    this.db.modificarActor(entidad.id,entidad).then(() => {
     this.modificarLista(entidad);
     this.limpiar(entidad);
     this.estaBorrando = false;
   }); 
  }


  modificarLista(entidad) {
    let listaModificada = [];
    for (let i = 0; i < this.actores.length; i++) {
      if(this.actores[i].id == entidad.id)
      {
        listaModificada.push(entidad);
      }
      else{
        listaModificada.push(this.actores[i]);
      }
      
    }
    this.actores = listaModificada;
  }
}
