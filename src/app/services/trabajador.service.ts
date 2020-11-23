import { Injectable } from '@angular/core';
import { Trabajador} from '../models/trabajador.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

// firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireList } from '@angular/fire/database';
import { AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private itemsCollection: AngularFirestoreCollection<Trabajador>;

  trabajadoresLista: Observable<any[]>;


  
  constructor(private firestore: AngularFirestore ) { 
    this.itemsCollection = firestore.collection<Trabajador>('trabajadoresLista');
    //this.trabajadoresLista = firestore.list('trabajadores').valueChanges();
    this.trabajadoresLista = this.firestore.collection('trabajador').valueChanges();
  }


  form: FormGroup = new FormGroup({
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
  
  iniciarFormGroup(){
    this.form.setValue({  
      $key: null,
      nombres: '',
      primer_apellido: '',
      segundo_apellido: '',
      rut: '',
      fecha_nacimiento: '',
      estado_civil: '',
      direccion: '',
      comuna: '',
      ciudad: '',
      nacionalidad: '',
      email: '',
      fono_personal: '',
      fono_casa: '',
      prevision: '',
      sistema_salud: ''

    })
  }
  
  obtenerTrabajadores(){
    //return this.trabajadoresLista;
    return this.firestore.collection<any>('trabajadores').valueChanges();
    //return this.firestore.collection('trabajador').snapshotChanges();
  }

  crearTrabajador(trabajador){


    return this.firestore.collection('trabajadores').add({
      nombres: trabajador.nombres,
      primer_apellido: trabajador.primer_apellido,
      segundo_apellido: trabajador.segundo_apellido,
      rut: trabajador.rut,
      fecha_nacimiento: trabajador.fecha_nacimiento,
      estado_civil: trabajador.estado_civil,
      direccion: trabajador.direccion,
      comuna: trabajador.comuna,
      ciudad: trabajador.ciudad,
      nacionalidad: trabajador.nacionalidad,
      email: trabajador.email,
      fono_personal: trabajador.fono_personal,
      fono_casa: trabajador.fono_casa,
      prevision: trabajador.prevision,
      sistema_salud: trabajador.sistema_salud
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

     //return this.firestore.collection('trabajadores').add(trabajador);


  //    return new Promise<any>((resolve, reject) =>{
  //     this.firestore
  //         .collection("trabajadores")
  //         .add(trabajador)
  //         .then(res => {}, err => reject(err));
  // });



  }

  actualizarTrabajador(trabajador){
    // this.trabajadoresLista.update(trabajador.$key{
    //   nombres: trabajador.nombres,
    //   primer_apellido: trabajador.primer_apellido,
    //   segundo_apellido: trabajador.segundo_apellido,
    //   rut: trabajador.rut,
    //   fecha_nacimiento: trabajador.fecha_nacimiento,
    //   estado_civil: trabajador.estado_civil,
    //   direccion: trabajador.direccion,
    //   comuna: trabajador.comuna,
    //   ciudad: trabajador.ciudad,
    //   nacionalidad: trabajador.nacionalidad,
    //   email: trabajador.email,
    //   fono_personal: trabajador.fono_personal,
    //   fono_casa: trabajador.fono_casa,
    //   prevision: trabajador.prevision,
    //   sistema_salud: trabajador.sistema_salud
    // })
    delete trabajador.id;
    this.firestore.doc('trabajadores/' + trabajador.$key).update(trabajador);
  }

  eliminarTrabajador(id:any){
    this.firestore.collection('trabajadores').doc(id).delete;
  }

}