import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura';
import { AsignaturaService } from '../asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ver-asignatura',
  templateUrl: './ver-asignatura.component.html',
  styleUrls: ['./ver-asignatura.component.css']
})
export class VerAsignaturaComponent implements OnInit {
  asignatura:Asignatura;
  asignaturaEditar:Asignatura;

  constructor(private router:Router,
    private asignaturaService:AsignaturaService) {
    const navigation = this.router.getCurrentNavigation();
    this.asignatura= navigation.extras.state.asignatura;

    this.asignaturaEditar=this.asignatura;
   }

  ngOnInit(): void {
    
  }
  editarAsignatura(){
    this.asignaturaService.editarAsignatura(this.asignaturaEditar).subscribe(data => {
        alert(data.data);
    })
  }
  editarHorarios(){
    this.router.navigateByUrl('/horarios', { state: { asignatura: this.asignaturaEditar } });
  }
  volver(){
    this.router.navigateByUrl('/asignaturasAdmin');
  }
}
