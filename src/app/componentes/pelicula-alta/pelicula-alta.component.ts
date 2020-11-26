import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { HttpServiceService } from 'src/app/servicios/http-service.service';
import { Actor } from '../../clases/actor';
import { FirestoreService } from '../../servicios/firestore.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public actores: Actor[];
  public nombre: string;
  public fechaDeEstreno: string;
  public cantPublico: number;
  public tipo: string;
  public actorAgregado;
  public estaGuardando = false;
  public paisAgregado:any;
  public paises = [];


  constructor(public db: FirestoreService,private service : HttpServiceService, private router:Router) {
    this.getData();
    this.service.getPaises();
    this.paises = this.service.lista;
  }

  ngOnInit(): void {
  }


  setearPais(pais)
  {
    this.paisAgregado = pais;
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

    });
  }

  setearActor(actor) {
    this.actorAgregado = actor;
  }

  guardar() {
    if (this.nombre != null && this.actorAgregado != null && this.cantPublico != null && this.fechaDeEstreno != null && this.tipo != null && this.paisAgregado != null) {
      this.estaGuardando = true;
      this.db.postPelicula(
        new Pelicula(this.ID(), this.nombre, this.tipo, this.fechaDeEstreno, this.cantPublico, '', this.actorAgregado)
        , new Actor(this.actorAgregado.id, this.actorAgregado.nombre, this.actorAgregado.apellido,
          this.actorAgregado.fechaNac, this.actorAgregado.foto, this.actorAgregado.sexo, this.actorAgregado.pais),this.paisAgregado).then(() => {
            this.estaGuardando = false;
            this.router.navigate(['/busqueda']);
          });
    }

  }

  ID() {

    return '_' + Math.random().toString(36).substr(2, 9);

  }


}
