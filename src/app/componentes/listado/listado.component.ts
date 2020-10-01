import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() personas1;
  @Output() personaSeleccionadaMostrar: EventEmitter<any>= new EventEmitter<any>(); 
  @Output() personaSeleccionadaBorrar: EventEmitter<any>= new EventEmitter<any>(); 

  @Output() personaSeleccionadaModificacion: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(entidad)
  {
    this.personaSeleccionadaMostrar.emit(entidad);
  }

  borrar(entidad)
  {
    this.personaSeleccionadaBorrar.emit(entidad);

  }

  modificar(entidad)
  {
    this.personaSeleccionadaModificacion.emit(entidad);

  }

}
