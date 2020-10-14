import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura';
import { AsignaturaService } from '../asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Horario } from '../Clases/horario';

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['./editar-horario.component.css']
})
export class EditarHorarioComponent implements OnInit {
  horario:Horario;
  horarioEditar:Horario;
  constructor(private router:Router,
    private asignaturaService:AsignaturaService,
    private _location: Location) {

    const navigation = this.router.getCurrentNavigation();
    this.horario= navigation.extras.state.horario;


   this.horarioEditar=this.horario;
     }

  ngOnInit(): void {
  }
  editarHorario(){
    this.asignaturaService.editarHorario(this.horarioEditar)
    .subscribe(data =>{
     alert(data.data);
    });
  }
  cancelar(){
    this._location.back();
  }
}
