import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tablaactor',
  templateUrl: './tablaactor.component.html',
  styleUrls: ['./tablaactor.component.css']
})
export class TablaactorComponent implements OnInit {

  @Input() actores;
  @Output() ActorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarActor(item) {
    this.ActorSeleccionado.emit(item);
  }

}
