import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  constructor(public angularfirestore: AngularFirestore) {
  }

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
