import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Actor } from '../../clases/actor';
import {FirestoreService} from '../../servicios/firestore.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public actores: Actor[];
  public nombre:string;
  public fechaDeEstreno:string;
  public cantPublico:number;
  public tipo:string;
  public actorAgregado;
  public estaGuardando = false; 
  constructor(public db:FirestoreService) { 
    this.getData();
  }

  ngOnInit(): void {
  }

  
  getData() {
    let pics = [];
    this.db.getActores().subscribe(x => {
      x.forEach(item => {
        pics.push(
          new Actor(item.id,item.data().nombre,item.data().apellido,item.data().fechaNac,item.data().foto,item.data().sexo)
        );
      });
      this.actores = pics;
    
    });
  }

  setearActor(actor)
  {
    this.actorAgregado = actor;
  }

  guardar()
  {
    this.estaGuardando = true;
    this.db.postPelicula(
      new Pelicula(this.ID(),this.nombre,this.tipo,this.fechaDeEstreno,this.cantPublico,'')
      ,new Actor(this.ID(),this.actorAgregado.nombre,this.actorAgregado.apellido,
    this.actorAgregado.fechaNac,this.actorAgregado.foto,this.actorAgregado.sexo)).then(() =>
    {
      this.estaGuardando = false;
    }   );
  }

   ID() {
  
    return '_' + Math.random().toString(36).substr(2, 9);
  
  }


}