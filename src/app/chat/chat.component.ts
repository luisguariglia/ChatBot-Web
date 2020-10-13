import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';


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
    ) { }

  ngOnInit(): void {
  }


 
  enviarMensaje(){
    if(this.contenidoMensaje.length>255){
      this.mensajes.push({id:"tu", msj:this.contenidoMensaje,tono:"obscuro",hora:new Date().getHours()+":"+new Date().getMinutes()});
      this.responderErrorLargo();
    }else if(this.contenidoMensaje==""){
      this.mensajes.push({id:"tu", msj:this.contenidoMensaje,tono:"obscuro",hora:new Date().getHours()+":"+new Date().getMinutes()});
      this.responderErrorVacio();
    }else{
      this.messageService.add(this.contenidoMensaje)
      .subscribe(data => {
        this.mensajes.push({id:"tu", msj:this.contenidoMensaje,tono:"obscuro",hora:new Date().getHours()+":"+new Date().getMinutes()});
        this.contenidoMensaje = "";
        this.responder(data.Reply);
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
    this.mensajes.push({id:"boot", msj:respuesta,tono:"claro",hora:new Date().getHours()+":"+new Date().getMinutes()});
    setTimeout(() => {  var chatHistory = document.getElementById("chat");
    chatHistory.scrollTop = chatHistory.scrollHeight; }, 50);
    
  }

}
