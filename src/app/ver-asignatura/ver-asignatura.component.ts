import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura';
import { AsignaturaService } from '../asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-ver-asignatura',
  templateUrl: './ver-asignatura.component.html',
  styleUrls: ['./ver-asignatura.component.css']
})
export class VerAsignaturaComponent implements OnInit {
  asignatura:Asignatura;
  asignaturaEditar:Asignatura;

  profileForm = new FormGroup({
    codigo: new FormControl('',[
    Validators.required,
    ]),
    nombre: new FormControl('',[
      Validators.required,
      ]),
    creditos: new FormControl('',[
      Validators.required,
      ]), 
    apruebaPor: new FormControl('',[
      //Validators.required,
      ]),
    nombreDocente: new FormControl('',[
       Validators.required
      ]), 
      correoDocente: new FormControl('',[
        Validators.required
       ]), 
       fechaInscripcion: new FormControl('',[
        //Validators.required
       ]),  
  });
  constructor(private router:Router,
    private asignaturaService:AsignaturaService) {
    const navigation = this.router.getCurrentNavigation();
    this.asignatura= navigation.extras.state.asignatura;

    this.asignaturaEditar=this.asignatura;
   }

  ngOnInit(): void {
    
  }
  editarAsignatura(){
    this.asignaturaEditar.codigo=this.profileForm.value.codigo;
    this.asignaturaEditar.nombre=this.profileForm.value.nombre;
    this.asignaturaEditar.creditos=this.profileForm.value.creditos;
    this.asignaturaEditar.apruebaPor=this.profileForm.value.apruebaPor;
    this.asignaturaEditar.nombreDoc=this.profileForm.value.nombreDocente;
    this.asignaturaEditar.correoDoc=this.profileForm.value.correoDocente;
    this.asignaturaEditar.fechaInscripcion=this.profileForm.value.fechaInscripcion;

    this.asignaturaService.editarAsignatura(this.asignaturaEditar).subscribe(data => {
        alert(data.data);
        this.router.navigateByUrl('/asignaturasAdmin');
    })   
  }
  editarHorarios(){
    this.router.navigateByUrl('/horarios', { state: { asignatura: this.asignaturaEditar } });
  }
  volver(){
    this.router.navigateByUrl('/asignaturasAdmin');
  }
}
