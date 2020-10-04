import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public uploadTask: firebase.storage.UploadTask;
  public url: string;
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {

  }


  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear().toString();
    return dd + '/' + mm + '/' + yyyy;

  }

  getDateUTC() {
    var date = Date.now();
    var a = new Date(date);
    return a.toISOString();

  }




  uploadFile(dataUrl) {

    var fileName = `${new Date().getTime()}photo`;
    var ref = firebase.storage().ref().child('peliculas' + "/" + fileName);

    this.uploadTask = ref.putString(dataUrl, 'data_url');
    return this.uploadTask;

  }

  postPhoto(pelicula: Pelicula) {

    return this.db.collection('peliculas').add({

    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  postPelicula(pelicula:Pelicula,actor:Actor) {
    return this.db.collection('peliculas').add({
      cantPublico:pelicula.cantPublico,
      fechaDeEstreno:pelicula.fechaDeEstreno,
      fotoPelicula: '',
      nombre:pelicula.nombre,
      tipo: pelicula.tipo,
      actor: {
        nombre:actor.nombre,
        apellido:actor.apellido,
        fechaNac:actor.fechaNac,
        sexo:actor.sexo,
        foto:actor.foto,
        id:actor.id
      }
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }



  getPeliculas() {
    return this.db.collection('peliculas').get();

  }



  getActores() {
    return this.db.collection('actores').get();

  }


  borrarPelicula(id)
  {
    return this.db.collection('peliculas').doc(id).delete();
  }

}



