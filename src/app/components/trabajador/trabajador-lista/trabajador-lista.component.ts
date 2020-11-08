import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../../services/trabajador.service'
import { Trabajador } from '../../../models/trabajador.model' 

@Component({
  selector: 'app-trabajador-lista',
  templateUrl: './trabajador-lista.component.html',
  styleUrls: ['./trabajador-lista.component.css']
})
export class TrabajadorListaComponent implements OnInit {

  trabajadores: Trabajador[];


  constructor(private trabajadorService: TrabajadorService) { }

  ngOnInit(): void {

    }

}

