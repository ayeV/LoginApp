import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  @Input() personaSeleccionadaBorrar;
  @Output() BorradoDeElemento : EventEmitter<any>= new EventEmitter<any>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  borrar(entidad)
  {
    this.BorradoDeElemento.emit(entidad);
  }
}
