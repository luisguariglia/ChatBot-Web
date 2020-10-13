import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages: string[] = [];
    constructor(private http: HttpClient) { }


  add(message: string) {
  	const headers = { 'Authorization': '*'};
    return this.http.post<any>('http://localhost:5000/send-msg', {MSG:message});
  }

  clear() {
    //this.messages = [];
  }
}