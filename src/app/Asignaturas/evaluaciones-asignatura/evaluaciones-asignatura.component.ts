import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../Clases/asignatura';
import { AsignaturaService } from '../../Services/asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Horario } from '../../Clases/horario';
import { ToastrService } from 'ngx-toastr';
import { Evaluacion } from 'src/app/Clases/evualuacion';
 
@Component({
  selector: 'app-evaluaciones-asignatura',
  templateUrl: './evaluaciones-asignatura.component.html',
  styleUrls: ['./evaluaciones-asignatura.component.css']
})
export class EvaluacionesAsignaturaComponent implements OnInit {

  asignatura:Asignatura;
  evaluaciones:Array<Evaluacion>;

  constructor(private router:Router,
    private asignaturaService:AsignaturaService,
    private toastr:ToastrService) { 
    const navigation = this.router.getCurrentNavigation();
    this.asignatura= navigation.extras.state.asignatura;
    this.getEvaluaciones();
    this.evaluaciones=new Array();
  }

  ngOnInit(): void {
  }
  getEvaluaciones(){
    
    for (let evaluacion of this.asignatura.evaluaciones) {

        this.asignaturaService.getEvaluacion(evaluacion).subscribe(data => {
        this.evaluaciones.push(data.evaluacion);   
        })

    }
  }
  eliminarEvaluacion(id,i){
      this.asignaturaService.borrarEvaluacion(id).subscribe(data => {
        this.toastr.success(data.data);
        if(data.data=="Evaluacion eliminada con exito"){
          if (i !== -1) {
              this.evaluaciones.splice(i, 1);
          }   
        }
      })
  }
  nuevaEvaluacion(){
    this.router.navigateByUrl('/nuevaEvaluacion', { state: { asignatura: this.asignatura } });
  }
  volver(){
    this.router.navigateByUrl('/asignaturasAdmin', { state: { asignatura: this.asignatura } });
  }


}
