import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Trabajador} from '../../../models/trabajador.model'



@Component({
  selector: 'app-trabajador-agregar',
  templateUrl: './trabajador-agregar.component.html',
  styleUrls: ['./trabajador-agregar.component.css']
})
export class TrabajadorAgregarComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
