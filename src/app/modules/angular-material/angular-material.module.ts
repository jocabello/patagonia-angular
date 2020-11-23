import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';  
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table'; 


import {MatDialogModule} from '@angular/material/dialog'; 


import {MatButtonModule} from '@angular/material/button'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    //MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    //MatDialogModule
  ],
  providers: [],
})
export class AngularMaterialModule { }
