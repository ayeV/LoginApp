import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modificar-actor',
  templateUrl: './modificar-actor.component.html',
  styleUrls: ['./modificar-actor.component.css']
})
export class ModificarActorComponent implements OnInit {

  @Input() actorSeleccionadoModificar 
 
  public nombre:string;
  public apellido:string;
  public sexo:string;
  public pais:string;
  public fechaNac:string;
  @Output() Modificar : EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log()
    if(changes['actorSeleccionadoModificar']) {
      this.nombre = this.actorSeleccionadoModificar.nombre;
      this.apellido = this.actorSeleccionadoModificar.apellido;
      this.sexo = this.actorSeleccionadoModificar.sexo;
      this.fechaNac = this.actorSeleccionadoModificar.fechaNac;
      this.pais = this.actorSeleccionadoModificar.pais.nombre;
    }
  }

  ngOnInit(): void {
    
  }

  modificar(entidad)
  {

    this.Modificar.emit({
      nombre: this.nombre ? this.nombre : this.actorSeleccionadoModificar.nombre,
      apellido: this.apellido ? this.apellido: this.actorSeleccionadoModificar.apellido,
      sexo: this.sexo ? this.sexo : this.actorSeleccionadoModificar.sexo,
      fechaNac:this.fechaNac ? this.fechaNac: this.actorSeleccionadoModificar.fechaNac,
      foto:this.actorSeleccionadoModificar.foto,
      pais:this.pais ? this.pais: this.actorSeleccionadoModificar.pais.nombre,
      id: this.actorSeleccionadoModificar.id
    });
  }

}
