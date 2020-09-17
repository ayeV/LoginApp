import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  @Input() data;
  @Output() entidadSeleccionada: EventEmitter<any>= new EventEmitter<any>(); 
  subscription:Subscription
  constructor() { }

  ngOnInit(): void {
  }

  mostrarEntidad(entidad)
  {
    this.entidadSeleccionada.emit(entidad);
  }


 
}

