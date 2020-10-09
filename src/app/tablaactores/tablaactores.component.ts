import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tablaactores',
  templateUrl: './tablaactores.component.html',
  styleUrls: ['./tablaactores.component.css']
})
export class TablaactoresComponent implements OnInit {

  @Input() actores1;
  @Output() actorSeleccionadoMostrar: EventEmitter<any>= new EventEmitter<any>(); 
  @Output() actorSeleccionadoBorrar: EventEmitter<any>= new EventEmitter<any>(); 

  @Output()  actorSeleccionadoModificar: EventEmitter<any>= new EventEmitter<any>(); 
  constructor() { }

  ngOnInit(): void {
  }

  mostrar(entidad)
  {
    this.actorSeleccionadoMostrar.emit(entidad);
  }

  borrar(entidad)
  {
    this.actorSeleccionadoBorrar.emit(entidad);

  }

  modificar(entidad)
  {
    console.log(entidad);
    this.actorSeleccionadoModificar.emit(entidad);

  }


}
