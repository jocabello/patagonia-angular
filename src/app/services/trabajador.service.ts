import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Trabajador} from '../models/trabajador'

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  // injectar AngularFirestore en mi servicio 
  constructor(private firestore: AngularFirestore ) { }

  obtenerTrabajadores(){
    return this.firestore.collection('trabajadores').snapshotChanges();
  }

  crearTrabajador(){
    return this.firestore.collection('trabajadores').add(Trabajador);
  }

  actualizarTrabajador(trabajador: Trabajador){
    delete trabajador.id;
    this.firestore.doc('trabajadores/' + trabajador.id).update(trabajador);
  }

  eliminarTrabajador(trabajadorId: string){
    this.firestore.doc('trabajadores/' + trabajadorId).delete();
  }
}