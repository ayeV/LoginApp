import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/servicios/http-service.service';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css']
})
export class BotonEntidadComponent implements OnInit {
  @Input() unaEntidad;
  constructor(private service: HttpServiceService) { }

  ngOnInit(): void {
  }

eliminar(){
  this.service.delete(this.unaEntidad.id);
}



}
