import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TrabajadorService } from '../../../services/trabajador.service'
import { Trabajador } from '../../../models/trabajador.model' 
import { Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { TrabajadorComponent } from '../trabajador.component';



@Component({
  selector: 'app-trabajador-lista',
  templateUrl: './trabajador-lista.component.html',
  styleUrls: ['./trabajador-lista.component.css']
})
export class TrabajadorListaComponent implements OnInit {

  
  displayedColumns: string[] = ['nombres', 'primer_apellido', 'segundo_apellido', 'rut', 'nacionalidad'];
  dataSource: MatTableDataSource<any>;
  
  trabajadores: Observable<Trabajador[]>;
  
  list: Trabajador[];
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: TrabajadorService,
    private dialog: MatDialog,
    //public dialogRef: MatDialogRef<TrabajadorComponent>
    ) { }
    

  ngOnInit() {
    this.service.obtenerTrabajadores().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilters(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
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


//this.trabajadores = this.service.obtenerTrabajadores();
// this.service.obtenerTrabajadores().subscribe(
//   list => {
//     let array = list.map(item =>{
//       return {
//         $key: item.$key,
//         ...item.payload.val()
//       };
//     });
//     this.trabajadores = new MatTableDataSource(array);
//   }
// );