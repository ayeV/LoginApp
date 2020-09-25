import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css']
})
export class PaisesBanderaComponent implements OnInit {

  @Input() pais;
  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 
  @Output() paisAGuardar: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  guardar()
  {
    this.paisAGuardar.emit(this.pais);
  }

  ver()
  {
    this.paisSeleccionado.emit(this.pais);

  }

}
