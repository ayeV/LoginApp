import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../servicios/http-service.service';
import { Pais } from '../../clases/pais';
import { Actor } from '../../clases/actor';
import { AngularFireAction } from '@angular/fire/database';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public paises = [];
  public nombre: string;
  public apellido:string;
  public fechaNac:string;
  public sexo:string;
  public paisAgregado:any;
  public estaGuardando = false;
  constructor(private service : HttpServiceService, private db:FirestoreService) { 
    this.service.getPaises();
    this.paises = this.service.lista;
  }

  ngOnInit(): void {
  }

  setearPais(pais)
  {
    this.paisAgregado = pais;
  }

  
  guardar()
  {
    if(this.nombre != null && this.apellido != null && this.paisAgregado != null && this.fechaNac != null && this.sexo != null)
    {
      this.estaGuardando = true;
      this.db.postActor(
        new Actor(this.ID(),this.nombre,this.apellido,
      this.fechaNac,null,this.sexo,this.paisAgregado)).then(() =>
      {
        this.estaGuardando = false;
      }   );
    }
 
  }

   ID() {
  
    return '_' + Math.random().toString(36).substr(2, 9);
  
  }


 

}
