import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {HttpServiceService} from '../../servicios/http-service.service';


@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})


export class ControlEntidadComponent implements OnInit {
  subscription: Subscription;
  public datos;
  public entidad;
  public datosBorrados;
  constructor(private service: HttpServiceService) {

   }

  ngOnInit(): void {
    this.subscription = this.service.getNotification().subscribe(data => {
      if(data)
        this.datos = this.service.getData();
        this.datosBorrados = this.service.getEliminados();
    });


  }

  tomarEntidadDetalle(entidad)
  {
    this.entidad = entidad;
    
  }

  eliminarEntidad(entidad)
  {
    this.datos.pop();
  }



}
