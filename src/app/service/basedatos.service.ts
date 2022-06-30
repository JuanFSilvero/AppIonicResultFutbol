import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(public angularfirestore: AngularFirestore) {
  }

  //Clasificacion Fase1
  getGrupo1fase1() {
    return this.angularfirestore.collection("grupo1fase1").snapshotChanges();
  }

  getGrupo2fase1() {
    return this.angularfirestore.collection("grupo2fase1").snapshotChanges();
  }

  getGrupo3fase1() {
    return this.angularfirestore.collection("grupo3fase1").snapshotChanges();
  }

  getGrupo4fase1() {
    return this.angularfirestore.collection("grupo4fase1").snapshotChanges();
  }

  getGrupo5fase1() {
    return this.angularfirestore.collection("grupo5fase1").snapshotChanges();
  }

  getGrupo6fase1() {
    return this.angularfirestore.collection("grupo6fase1").snapshotChanges();
  }

  //Partidos Fase1
  //Grupo 1
  getGrupo1fecha1fase1() {
    return this.angularfirestore.collection("grupo1fecha1fase1").snapshotChanges();
  }

  getGrupo1fecha2fase1() {
    return this.angularfirestore.collection("grupo1fecha2fase1").snapshotChanges();
  }

  getGrupo1fecha3fase1() {
    return this.angularfirestore.collection("grupo1fecha3fase1").snapshotChanges();
  }

  getGrupo1fecha4fase1() {
    return this.angularfirestore.collection("grupo1fecha4fase1").snapshotChanges();
  }

  getGrupo1fecha5fase1() {
    return this.angularfirestore.collection("grupo1fecha5fase1").snapshotChanges();
  }

  getGrupo1fecha6fase1() {
    return this.angularfirestore.collection("grupo1fecha6fase1").snapshotChanges();
  }

  //Partidos Fase1
  //Grupo 2
  getGrupo2fecha1fase1() {
    return this.angularfirestore.collection("grupo2fecha1fase1").snapshotChanges();
  }

  getGrupo2fecha2fase1() {
    return this.angularfirestore.collection("grupo2fecha2fase1").snapshotChanges();
  }

  getGrupo2fecha3fase1() {
    return this.angularfirestore.collection("grupo2fecha3fase1").snapshotChanges();
  }

  getGrupo2fecha4fase1() {
    return this.angularfirestore.collection("grupo2fecha4fase1").snapshotChanges();
  }

  getGrupo2fecha5fase1() {
    return this.angularfirestore.collection("grupo2fecha5fase1").snapshotChanges();
  }

  getGrupo2fecha6fase1() {
    return this.angularfirestore.collection("grupo2fecha6fase1").snapshotChanges();
  }

  //Partidos Fase1
  //Grupo 3
  getGrupo3fecha1fase1() {
    return this.angularfirestore.collection("grupo3fecha1fase1").snapshotChanges();
  }

  getGrupo3fecha2fase1() {
    return this.angularfirestore.collection("grupo3fecha2fase1").snapshotChanges();
  }

  getGrupo3fecha3fase1() {
    return this.angularfirestore.collection("grupo3fecha3fase1").snapshotChanges();
  }

  getGrupo3fecha4fase1() {
    return this.angularfirestore.collection("grupo3fecha4fase1").snapshotChanges();
  }

  getGrupo3fecha5fase1() {
    return this.angularfirestore.collection("grupo3fecha5fase1").snapshotChanges();
  }

  getGrupo3fecha6fase1() {
    return this.angularfirestore.collection("grupo3fecha6fase1").snapshotChanges();
  }

  //Partidos Fase1
  //Grupo 4
  getGrupo4fecha1fase1() {
    return this.angularfirestore.collection("grupo4fecha1fase1").snapshotChanges();
  }

  getGrupo4fecha2fase1() {
    return this.angularfirestore.collection("grupo4fecha2fase1").snapshotChanges();
  }

  getGrupo4fecha3fase1() {
    return this.angularfirestore.collection("grupo4fecha3fase1").snapshotChanges();
  }

  getGrupo4fecha4fase1() {
    return this.angularfirestore.collection("grupo4fecha4fase1").snapshotChanges();
  }

  getGrupo4fecha5fase1() {
    return this.angularfirestore.collection("grupo4fecha5fase1").snapshotChanges();
  }

  getGrupo4fecha6fase1() {
    return this.angularfirestore.collection("grupo4fecha6fase1").snapshotChanges();
  }

  //Partidos Fase1
  //Grupo 5
  getGrupo5fecha1fase1() {
    return this.angularfirestore.collection("grupo5fecha1fase1").snapshotChanges();
  }

  getGrupo5fecha2fase1() {
    return this.angularfirestore.collection("grupo5fecha2fase1").snapshotChanges();
  }

  getGrupo5fecha3fase1() {
    return this.angularfirestore.collection("grupo5fecha3fase1").snapshotChanges();
  }

  getGrupo5fecha4fase1() {
    return this.angularfirestore.collection("grupo5fecha4fase1").snapshotChanges();
  }

  getGrupo5fecha5fase1() {
    return this.angularfirestore.collection("grupo5fecha5fase1").snapshotChanges();
  }

  getGrupo5fecha6fase1() {
    return this.angularfirestore.collection("grupo5fecha6fase1").snapshotChanges();
  }

  //Partidos Fase1
  //Grupo 6
  getGrupo6fecha1fase1() {
    return this.angularfirestore.collection("grupo6fecha1fase1").snapshotChanges();
  }

  getGrupo6fecha2fase1() {
    return this.angularfirestore.collection("grupo6fecha2fase1").snapshotChanges();
  }

  getGrupo6fecha3fase1() {
    return this.angularfirestore.collection("grupo6fecha3fase1").snapshotChanges();
  }

  getGrupo6fecha4fase1() {
    return this.angularfirestore.collection("grupo6fecha4fase1").snapshotChanges();
  }

  getGrupo6fecha5fase1() {
    return this.angularfirestore.collection("grupo6fecha5fase1").snapshotChanges();
  }

  getGrupo6fecha6fase1() {
    return this.angularfirestore.collection("grupo6fecha6fase1").snapshotChanges();
  }

  getGoleadores() {
    return this.angularfirestore.collection("goleadores").snapshotChanges();
  }

  creategrupo(grupo: any){
    return this.angularfirestore.collection("resultfutbol").add(grupo);
  }

  updateMesa(id: any, grupo: any){
    return this.angularfirestore.collection("resultfutbol").doc(id).update(grupo);
  }

  deleteMesa(id: any){
    return this.angularfirestore.collection("resultfutbol").doc(id).delete();
  }

}
