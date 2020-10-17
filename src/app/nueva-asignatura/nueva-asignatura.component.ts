import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {AsignaturaService} from '../asignatura.service';
@Component({
  selector: 'app-nueva-asignatura',
  templateUrl: './nueva-asignatura.component.html',
  styleUrls: ['./nueva-asignatura.component.css']
})
export class NuevaAsignaturaComponent implements OnInit {
  profileForm = new FormGroup({
    codigo: new FormControl('',[
      Validators.required
    ]),
    nombre: new FormControl('',[
      Validators.required
      ]), 
    creditos: new FormControl('',[
      Validators.required
      ]),
    programa: new FormControl('',[  //no lleva required
       
      ]),
      apruebaPor: new FormControl('',[
        Validators.required
       ]),
       nombreDocente: new FormControl('',[
        Validators.required
       ]),
       correoDocente: new FormControl('',[
        Validators.required
       ]),
       fechaIncripcion: new FormControl('',[
        Validators.required
       ]),
  });
  constructor(private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private asignaturaService:AsignaturaService) { }

  ngOnInit(): void {
  }

  addAsig(){
    //alert(this.profileForm.value.apruebaPor);
    this.asignaturaService.nuevaAsignatura(
      this.profileForm.value.codigo,
      this.profileForm.value.nombre,
      this.profileForm.value.creditos,
      this.profileForm.value.programa,
      this.profileForm.value.apruebaPor,
      this.profileForm.value.nombreDocente,
      this.profileForm.value.correoDocente,
      this.profileForm.value.fechaIncripcion
      )
    .subscribe(data => {
      alert(data.data);
      this.router.navigate(['/asignaturasAdmin']);
    }
    );
    
  }
  cancelar(){
    /*this.nombre:string;
    this.cedula:string;
    this.apellido:string;
    this.password:string;
    this.admin:boolean;*/
    this.router.navigate(['/asignaturasAdmin']);
  }
}
