import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class FeriadoService {
  
    constructor(private http: HttpClient, private auth: AuthService) { }


  listar() {
    const headers = { 'Authorization': '*'};
    return this.http.post<any>('http://localhost:8080/feriados/listado',{});
  }

  nuevoFeriado(fecha,motivo){
    return this.http.post<any>('http://localhost:8080/feriados/nuevo', {
      fecha:fecha,
      motivo:motivo
      });
  }
  borrar(id){
    return this.http.post<any>('http://localhost:8080/feriados/delete', {
      id:id,
      });
  }

  clear() {
    //this.messages = [];
  }
}