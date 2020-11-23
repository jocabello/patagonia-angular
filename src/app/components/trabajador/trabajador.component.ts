import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service'
import { Trabajador } from '../../models/trabajador.model' 
import { DialogPosition, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {

  constructor(
    public service: TrabajadorService,
    private dialog: MatDialog,
   // public dialogRef: MatDialogRef<TrabajadorComponent>
    ) { }

  ciudades = [
    { id: 1, value: 'Metropolitana de Santiago'},
    { id: 2, value: 'Antofagasta'}
  ];

  comunas = [
    { id: 1, value: 'comuna 1'},
    { id: 2, value: 'comuna 2'}
  ];

  nacionalidades = [
    { id: 1, value: 'Chilena'},
    { id: 2, value: 'Colombiana'}
  ];

  previsiones = [
    { id: 1, value: 'AFP Capital'},
    { id: 2, value: 'AFP Cuprum'},
    { id: 3, value: 'AFP Habitat'},
    { id: 4, value: 'AFP Modelo'},
    { id: 5, value: 'AFP Planvital'},
    { id: 6, value: 'AFP Provida'}
  ];

  sistemasDeSalud = [
    { id: 1, value: 'FONASA'},
    { id: 2, value: 'ISAPRE'}
  ];

  estadosCiviles  = [
    { id: 1, value: 'Soltero'},
    { id: 2, value: 'Casado'},
    { id: 3, value: 'Viudo'},
    { id: 4, value: 'Divorciado'}
  ];

  ngOnInit(): void {
    //this.service.obtenerTrabajadores();
  }

  onSubmit(): void{
    //this.service.crearTrabajador(this.service.form.value);


    if(this.service.form.valid){
      this.service.crearTrabajador(this.service.form.value)
      .then(() => {
        alert("creado")
        this.service.form.reset();
        this.service.iniciarFormGroup();
      }).catch(error =>{
        console.error(error);
      });
    }
    this.onClose();
  }

  onClear(){
    this.service.form.reset();
    this.service.iniciarFormGroup();

  }


  onCreate() {
    this.service.iniciarFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(TrabajadorComponent, dialogConfig);
  }

  onClose() {
    this.service.form.reset();
    this.service.iniciarFormGroup();
    this.dialog.closeAll();
  }

}    