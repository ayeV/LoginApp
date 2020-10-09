import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.css']
})
export class BorrarActorComponent implements OnInit {

  @Input() actorSeleccionadoBorrar;
  @Output() BorradoDeElemento : EventEmitter<any>= new EventEmitter<any>(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  borrar(entidad)
  {
    this.BorradoDeElemento.emit(entidad);
  }
}
