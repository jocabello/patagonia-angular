import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Trabajador} from '../models/trabajador.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  // injectar AngularFirestore en mi servicio 
  constructor(private firestore: AngularFirestore ) { }

  form: FormGroup = new FormGroup({
    //  "$" = primary key??
    $key: new FormControl(null),
    nombres: new FormControl('', Validators.required),
    primer_apellido: new FormControl('', Validators.required),
    segundo_apellido: new FormControl(''),
    rut: new FormControl('', Validators.required),
    fecha_nacimiento: new FormControl('', Validators.required),
    estado_civil: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    comuna: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    nacionalidad: new FormControl('', Validators.required),
    email: new FormControl(''),
    fono_personal: new FormControl('', Validators.minLength(12)),
    fono_casa: new FormControl('', Validators.minLength(12)),
    prevision: new FormControl(''),
    sistema_salud: new FormControl('')

  });
  
  
  
  
  
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