import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../servicios/http-service.service';


@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})


export class ControlEntidadComponent implements OnInit {
  public datos;
  public entidad;
  constructor(private service: HttpServiceService) {

     this.service.getData().subscribe(
      x => {
        this.datos = x;
        console.log(this.datos);
      }

    );

   }

  ngOnInit(): void {
  }

  tomarEntidadDetalle(entidad)
  {
    this.entidad = entidad;
    
  }



}
