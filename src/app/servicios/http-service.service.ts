import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private subject = new Subject<any>();
  public lista = [];
  public listaEliminados = [];
  constructor(private http: HttpClient) {
    this.getPaises();
   
  }


  getPaises() {
    this.http
      .get("https://restcountries.eu/rest/v2/region/europe").subscribe((x: any) => {
        this.lista = x;
        this.sendNotification(true);
      });
  }



getPaises2()
{
  return  this.http
  .get("https://restcountries.eu/rest/v2/region/europe");
}



  sendNotification(value: any) {
    this.subject.next({ text: value });
  }

  getNotification() {
    return this.subject.asObservable();
  }



  public getData() {
    return this.lista;
  }

  public getEliminados() {
    return this.listaEliminados;
  }

  public delete(id) {
    let elemento;
    this.lista = this.lista.filter(x => {
      if (x.id == id) {
        elemento = x;
      }
      return x.id != id;
    });
    if (elemento) {
      this.listaEliminados.push(elemento);
    }
    this.sendNotification(true);
  }


  public getPersonas()
  {
    this.http
    .get("https://api.mocki.io/v1/2898eee4").subscribe((x: any) => {
      this.lista = x;
      this.sendNotification(true);
    });

  }


}
