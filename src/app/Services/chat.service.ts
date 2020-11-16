import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages: string[] = [];
    constructor(private http: HttpClient, private auth: AuthService) { }


  add(message: string) {
    const headers = { 'Authorization': '*'};

    var id= this.auth.getActualUser();
    if(id == null || id == undefined){
      id = "0";
    }
    return this.http.post<any>('https://chatbot-tip-backend-dialogflow.herokuapp.com/send-msg', {MSG:message,id:id});
  }

  webhook() {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('https://chatbot-tip-backend-dialogflow.herokuapp.com/ultima',{});
  }

  profesor(codigo) {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/preguntas/FAQcal11',{codigo:codigo});
  }
  horarios(codigo) {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/preguntas/FAQcal9',{codigo:codigo});
  }
  evaluaciones(codigo) {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/preguntas/FAQcal10',{codigo:codigo});
  }
  creditos(codigo) {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/preguntas/FAQcal13',{codigo:codigo});
  }
  limite(codigo) {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/preguntas/FAQcal12',{codigo:codigo});
  }

  cursada(codigo) {
    const headers = { 'Authorization': '*'};
    var id= this.auth.getActualUser();
    if(id == null || id == undefined){
      id = "0";
    }
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/preguntas/FAQcal8',{codigo:codigo,id:id});
  }

  clear() {
    //this.messages = [];
  }
}