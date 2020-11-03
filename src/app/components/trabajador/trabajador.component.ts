import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service'
import { Trabajador } from '../../models/trabajador' 

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
