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
    return this.http.post<any>('http://localhost:5000/send-msg', {MSG:message,id:id});
  }

  webhook() {
    const headers = { 'Authorization': '*'};
    
    return this.http.post<any>('http://localhost:5000/ultima',{});
  }
  clear() {
    //this.messages = [];
  }
}