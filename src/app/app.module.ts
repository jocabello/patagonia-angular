import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@Angular/forms";

// angular-material
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// components
import { TrabajadorComponent } from './components/trabajador/trabajador.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { TrabajadorListaComponent } from './components/trabajador/trabajador-lista/trabajador-lista.component';

//services

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    TrabajadorListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
