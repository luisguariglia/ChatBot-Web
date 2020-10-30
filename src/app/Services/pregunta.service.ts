import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  
    constructor(private http: HttpClient, private auth: AuthService) { }


  listar() {
    const headers = { 'Authorization': '*'};

  
    return this.http.get<any>('https://chatbot-tip-backend-dialogflow.herokuapp.com/listar-intent');
  }

  nuevaPregunta(nombre,pregunta,respuesta){
    return this.http.post<any>('https://chatbot-tip-backend-dialogflow.herokuapp.com/nuevo-intent', {
      nombreIntent:nombre,
      pregunta:pregunta,
      respuesta:respuesta
      });
  }
  borrar(id){
    return this.http.post<any>('https://chatbot-tip-backend-dialogflow.herokuapp.com/borrar-intent', {
      idIntent:id,
      });
  }

  clear() {
    //this.messages = [];
  }
}