import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { HttpServiceService } from 'src/app/servicios/http-service.service';

@Component({
  selector: 'app-pais-pelicula',
  templateUrl: './pais-pelicula.component.html',
  styleUrls: ['./pais-pelicula.component.css']
})
export class PaisPeliculaComponent implements OnInit {

  public paises:any;
  public pais:any;
  public peliculasDelPais = [];
  public actoresDelPais = [];
  public actores = [];
  public peliculas = [];
  constructor(public db: FirestoreService,private service : HttpServiceService, private router:Router) {
    this.getData();
    
   }

  ngOnInit(): void {
    this.getPeliculas();
    this.getActores();
  }

  getData() {
    this.service.getPaises2().subscribe((x): any => {

      this.paises = x;
      this.paises = this.paises.slice(0, 10);
      console.log(this.paises);
    });
  }
  getPeliculas() {
    let pics = [];
    this.db.getPeliculas().subscribe(x => {
      x.forEach(item => {
        pics.push({  
          id: item.id, 
          nombre:item.data().nombre, 
          tipo:item.data().tipo, 
          fechaDeEstreno:item.data().fechaDeEstreno, 
          cantPublico:item.data().cantPublico, 
          fotoPelicula:item.data().fotoPelicula,
          actor: item.data().actor,
          pais: item.data().pais,
        }
        );
      });
      this.peliculas = pics;
    });
  }

  getActores() {
    let pics = [];
    this.db.getActores().subscribe(x => {
      x.forEach(item => {
        pics.push({  
          id: item.id, 
          apellido:item.data().apellido, 
          nombre:item.data().nombre, 
          fechaNac:item.data().fechaNac, 
          foto:item.data().foto, 
          pais: item.data().pais,
          sexo:item.data().sexo
        }
        );
      });
      this.actores = pics;
    });
  }

  verPeliculas(nombrePais) {
    this.peliculasDelPais = [];
    this.peliculas.forEach((c)=>{
      if(c?.pais.nombre == nombrePais)
      {
        this.peliculasDelPais.push(c);
      }
    })
    console.log(this.peliculasDelPais);
  }

  verActores(nombrePais) {
    this.actoresDelPais = [];
  
    this.actores.forEach((c)=>{
      if(c.pais.nombre == nombrePais)
      {
        this.actoresDelPais.push(c);
      }
    })
    console.log(this.actoresDelPais);
  }


  
  verPais(entidad) {
    this.pais = {
      nombre:entidad.name,
      foto:entidad.flag
    }
  }


}
