import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http: HttpClient,
    private router:Router) { }

  nuevaAsignatura(codigo,nombre,creditos,programa,apruebaPor,nombreDocente,correoDocente,fechaIncripcion){
    return this.http.post<any>('http://localhost:8080/asignaturas/nueva', {
      codigo:codigo,
      nombre:nombre,
      creditos:creditos,
      programa:programa,

      apruebaPor:apruebaPor,
      nombreDoc:nombreDocente,
      correoDoc:correoDocente,
      fechaInscripcion:fechaIncripcion,
      });
  }
  getAsignaturas(){
      return this.http.post<any>('http://localhost:8080/asignaturas/listado', {});
  }
  editarAsignatura(asignatura){
    return this.http.post<any>('http://localhost:8080/asignaturas/update', {
      id:asignatura.id,
      codigo:asignatura.codigo,
      nombre:asignatura.nombre,
      creditos:asignatura.creditos,
      programa:asignatura.programa,
      apruebaPor:asignatura.apruebaPor,
      nombreDoc:asignatura.nombreDoc,
      correoDoc:asignatura.correoDoc,
      fechaInscripcion:asignatura.fechaInscripcion,
      });
  }

}
