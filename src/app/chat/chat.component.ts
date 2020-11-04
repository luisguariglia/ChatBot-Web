import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { ChatService } from '../Services/chat.service';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	titulo = "ChatBot TIP";
	descripcion = "Ingresa tu consulta para comenzar";
  contenidoMensaje: string;
  mensajes= [];

  constructor(
     private messageService: ChatService,
     private authService:AuthService
    ) { }

  ngOnInit(): void {
   /* this.authService.isAdmin().subscribe(data => {
      alert(data.data);
    })*/
  }


 
  enviarMensaje(){
    if(this.contenidoMensaje.length>255){
      this.mensajes.push({id:"tu", msj:this.contenidoMensaje,tono:"obscuro",hora:new Date().getHours()+":"+new Date().getMinutes()});
      this.responderErrorLargo();
    }else if(this.contenidoMensaje==""){
      this.mensajes.push({id:"tu", msj:this.contenidoMensaje,tono:"obscuro",hora:new Date().getHours()+":"+new Date().getMinutes()});
      this.responderErrorVacio();
    }else{
      this.mensajes.push({id:"tu", msj:this.contenidoMensaje,tono:"obscuro",hora:new Date().getHours()+":"+new Date().getMinutes()});
      let mensaje = this.contenidoMensaje;
      this.contenidoMensaje = "";
      this.mensajes.push({id:"temporal", msj:"Escribiendo...",tono:"claro",hora:""});
      setTimeout(() => {  var chatHistory = document.getElementById("chat");
    chatHistory.scrollTop = chatHistory.scrollHeight; }, 50);
      this.messageService.add(mensaje)
      .subscribe(data => {
        if(data.Reply == ""){
          this.messageService.webhook().subscribe(data => {
            this.responder(data.Reply);
            //console.log(data.Reply);
          });
        }else{
          this.responder(data.Reply);
        }
        
      });
    }
  
     
  }
  responderErrorLargo(){
    this.mensajes.push({id:"boot",msj:"No puedo entender más de 255 caractéres :(" ,tono:"claro",hora:new Date().getHours()+":"+new Date().getMinutes()});
    setTimeout(() => {  var chatHistory = document.getElementById("chat");
    chatHistory.scrollTop = chatHistory.scrollHeight; }, 50);
  }
  responderErrorVacio(){
    this.mensajes.push({id:"boot",msj:"Escribe una consulta por favor" ,tono:"claro",hora:new Date().getHours()+":"+new Date().getMinutes()});
    setTimeout(() => {  var chatHistory = document.getElementById("chat");
    chatHistory.scrollTop = chatHistory.scrollHeight; }, 50);
  }
  responder(respuesta){
    this.mensajes.pop();
    this.mensajes.push({id:"boot", msj:respuesta,tono:"claro",hora:new Date().getHours()+":"+new Date().getMinutes()});
    setTimeout(() => {  var chatHistory = document.getElementById("chat");
    chatHistory.scrollTop = chatHistory.scrollHeight; }, 50);
    
  }

}
