import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  
    constructor(private http: HttpClient, private auth: AuthService) { }


  Descargar() {
    const headers = { 'Authorization': '*'};
    return this.http.get<any>('https://chatbot-tip-backend.herokuapp.com/planillas/download');
  }

  
  
  subir(form){
    const headers = {'Content-Type': 'multipart/form-data','Authorization': '*'}
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/planillas/upload', form);
  }
  alta(){
    const headers = {'Content-Type': 'multipart/form-data','Authorization': '*'}
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/planillas/alta', {});
  }
  clear() {
    //this.messages = [];
  }
}