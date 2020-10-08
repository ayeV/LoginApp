import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpServiceService } from 'src/app/servicios/http-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public paises:any;
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: HttpServiceService) {
   
    this.getData();

  }

  ngOnInit(): void {
   
   
  }

  enviarPais(item) {
    console.log(item);
    this.paisSeleccionado.emit(
      {
        foto: item.flag,
        nombre: item.name,
        id: item.numericCode
      }
    );
  }

  getData() {
    this.service.getPaises2().subscribe((x): any => {

      this.paises = x;
      this.paises = this.paises.slice(0,4);
    });
  }

}
