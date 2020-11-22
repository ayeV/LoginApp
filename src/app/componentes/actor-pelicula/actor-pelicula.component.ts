import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  public actores: Actor[];
  public peliculasDelActor = [];
  public peliculas = [];
  public actorDetalle;
  public pais:Pais;
  constructor(public db: FirestoreService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    let pics = [];
    this.db.getActores().subscribe(x => {
      x.forEach(item => {
        pics.push(
          new Actor(item.id, item.data().nombre, item.data().apellido, item.data().fechaNac, item.data().foto, item.data().sexo, item.data().pais)
        );
      });
      this.actores = pics;
      this.getPeliculas();
    });
  }

  getPeliculas() {
    let pics = [];
    this.db.getPeliculas().subscribe(x => {
      x.forEach(item => {
        pics.push(
          new Pelicula(item.id, item.data().nombre, item.data().tipo, item.data().fechaDeEstreno, item.data().cantPublico, item.data().fotoPelicula,item.data().actor)
        );
      });
      this.peliculas = pics;
    });
  }


  verPeliculas(actor) {
    this.peliculasDelActor = [];
    console.log(this.peliculas);
    this.peliculas.forEach((c)=>{
      if(c.actor.id == actor.id)
      {
        this.peliculasDelActor.push(c);
      }
    })
    console.log(this.peliculasDelActor);
  }

  verPais(actor) {
    this.pais = new Pais(actor.pais.nombre,actor.pais.id,actor.pais.foto);
  }

  verDetalle(actor) {
    this.actorDetalle = actor;
  }


  limpiar(entidad) {
    this.actorDetalle = null;
  }

}
