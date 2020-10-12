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
    this.messageService.add(this.contenidoMensaje)
      .subscribe(data => {
        this.mensajes.push({id:"u", msj:this.contenidoMensaje});
        this.contenidoMensaje = "";
        this.responder(data.Reply);
      });
  }

  responder(respuesta){
    this.mensajes.push({id:"b", msj:respuesta});
  }

}
