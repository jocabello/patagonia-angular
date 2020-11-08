import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service'
import { Trabajador } from '../../models/trabajador.model' 

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {

  constructor(public service: TrabajadorService) { }

  ciudades = [
    { id: 1, value: 'Metropolitana de Santiago'},
    { id: 2, value: 'Antofagasta'}
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
  }

  onSubmit(){
    
  }

}