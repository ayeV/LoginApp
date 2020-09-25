import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpServiceService } from 'src/app/servicios/http-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  subscription: Subscription;
  public paises;
  public entidad;
  public datosBorrados;

  constructor(private service: HttpServiceService) { 
    this.subscription = this.service.getNotification().subscribe(data => {
      if(data)
        this.paises = this.service.getData();
    });
  }

  ngOnInit(): void {
  }

  tomarRegion(entidad)
  {
    this.service.getPaises(entidad);
    this.paises = this.service.lista;
    
  }

  mostrarPais(event)
  {

  }

}
