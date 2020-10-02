import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent implements OnInit {
  
  @Input() peliculaSeleccionadaMostrar;
  @Output() Limpiar : EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  
  limpiar(entidad)
  {
     this.Limpiar.emit(entidad);
  }
}
