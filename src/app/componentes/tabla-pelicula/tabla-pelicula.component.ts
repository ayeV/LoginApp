import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculas1;
  @Output() peliculaSeleccionadaMostrar: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  
  mostrar(entidad)
  {
    console.log(entidad);
    this.peliculaSeleccionadaMostrar.emit(entidad);
  }

}
