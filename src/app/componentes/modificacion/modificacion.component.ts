import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.css']
})
export class ModificacionComponent implements OnInit {

  @Input() personaSeleccionadaModificacion 
  public set value(v : any) {
    console.log(v);
    this.last_name = v.last_name;
    this.first_name = v.first_name;
    this.email = v.email;
    console.log("Email"+ this.email)
  };
  @Output() Modificar : EventEmitter<any> = new EventEmitter<any>();
  public last_name:string;
  public first_name:string;
  public email:string;
  constructor() { 
   
  }

  ngOnInit(): void {
    
  }

  modificar(entidad)
  {

    this.Modificar.emit({
      last_name: this.last_name ? this.last_name : this.personaSeleccionadaModificacion.last_name,
      first_name: this.first_name ? this.first_name: this.personaSeleccionadaModificacion.first_name,
      email: this.email ? this.email : this.personaSeleccionadaModificacion.email,
      photo:this.personaSeleccionadaModificacion.photo,
      id: this.personaSeleccionadaModificacion.id

    });
  }
}
