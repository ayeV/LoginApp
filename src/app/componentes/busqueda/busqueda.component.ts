import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import {FirestoreService} from '../../servicios/firestore.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public peliculas:Pelicula[];
  public peliculaDetalle;
  

  constructor(public db:FirestoreService) { 

    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    let pics = [];
    this.db.getPeliculas().subscribe(x => {
      x.forEach(item => {
        pics.push(
          new Pelicula(item.id,item.data().nombre,item.data().tipo,item.data().fechaDeEstreno,item.data().cantPublico,item.data().fotoPelicula)
        );
      });
      console.log(pics);
      this.peliculas = pics;
    
    });
  }


  limpiar(entidad) {
    this.peliculaDetalle = null;
  }
  
  enviarADetalle(entidad) {
    this.peliculaDetalle = entidad;
  }



}
