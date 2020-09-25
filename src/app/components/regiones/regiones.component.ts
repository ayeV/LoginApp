import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpServiceService } from 'src/app/servicios/http-service.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css']
})
export class RegionesComponent implements OnInit {

  public region: string;
  public url: string;
  @Output() regionSeleccionada: EventEmitter<any>= new EventEmitter<any>(); 

  constructor(private service: HttpServiceService) { 
    this.region = "Europa";
    this.url = "https://restcountries.eu/rest/v2/region/europe";
  }

  ngOnInit(): void {
  }

  cambiarTitulo(region) {


    switch (region) {
      case "Europa":
        this.region = "Europa";
        this.regionSeleccionada.emit("europe");
        this.url = "https://restcountries.eu/rest/v2/region/europe";
        break;

      case "Asia":
        this.region = "Asia";
        this.regionSeleccionada.emit("asia");
        this.url = "https://restcountries.eu/rest/v2/region/asia";

        break;

      case "America":
        this.region = "America";
        this.regionSeleccionada.emit("americas");
        this.url = "https://restcountries.eu/rest/v2/region/americas";


        break;
      case "Africa":
        this.region = "Africa";
        this.regionSeleccionada.emit("africa");
        this.url = "https://restcountries.eu/rest/v2/region/africa";


        break;


    }
  }



}
