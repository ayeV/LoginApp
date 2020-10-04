import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  public peliculas: Pelicula[];
  public peliculaDetalle;
  public borrado = 1;
  public estaBorrando = false;
  public message;
  constructor(public db: FirestoreService) {
    this.getData();
  }

  ngOnInit(): void {
  }


  getData() {
    let pics = [];
    this.db.getPeliculas().subscribe(x => {
      x.forEach(item => {
        pics.push(
          new Pelicula(item.id, item.data().nombre, item.data().tipo, item.data().fechaDeEstreno, item.data().cantPublico, item.data().fotoPelicula)
        );
      });
      this.peliculas = pics;

    });
  }


  limpiar(entidad) {
    this.peliculaDetalle = null;
  }

  enviarADetalle(entidad) {
    this.peliculaDetalle = entidad;
  }

  borrar(entidad) {
    this.estaBorrando = true;
    this.db.borrarPelicula(entidad.id).then(() => {
      this.peliculas = this.peliculas.filter((x) => {
        return x.id != entidad.id;
      });
      this.limpiar(entidad);
      this.estaBorrando = false;
    });
  }


}
