import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalleactor',
  templateUrl: './detalleactor.component.html',
  styleUrls: ['./detalleactor.component.css']
})
export class DetalleactorComponent implements OnInit {

  @Input() actorSeleccionadoMostrar;
  @Input() borrado;
  @Output() Limpiar: EventEmitter<any> = new EventEmitter<any>();
  @Output() BorrarActor: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  limpiar(entidad)
  {
     this.Limpiar.emit(entidad);
  }
}
