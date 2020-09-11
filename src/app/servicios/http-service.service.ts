import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }



  public getData() {
    return this.http
      .get("https://api.mocki.io/v1/570c5e5c")
     
  }


}
