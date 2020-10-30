import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { PreguntaService } from '../../Services/pregunta.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevapregunta',
  templateUrl: './nuevapregunta.component.html',
  styleUrls: ['./nuevapregunta.component.css']
})
export class NuevapreguntaComponent implements OnInit {
  profileForm = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
    ]),
    pregunta: new FormControl('',[
      Validators.required,
      ]),
    respuesta: new FormControl('',[
      Validators.required,
      ])
  });
  constructor(private preguntaService: PreguntaService,
    private fb: FormBuilder,
    private _location: Location,
    private router: Router,
    private toastr:ToastrService) {
      const navigation = this.router.getCurrentNavigation();
     }

  ngOnInit(): void {
  }
  addPregunta() : void{
    this.preguntaService.nuevaPregunta(
    this.profileForm.value.nombre,
    this.profileForm.value.pregunta,
    this.profileForm.value.respuesta
    ).subscribe(data => {
      this.toastr.success("Nueva pregunta registrada con éxito");
      this.router.navigateByUrl('/preguntas');

    });
    

  }
}
