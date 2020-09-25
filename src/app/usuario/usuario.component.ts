import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { USUARIOS } from '../mock-usuarios';
import { UsuarioService } from '../usuario.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios :Usuario[];
  //selectedUser: Usuario;

  constructor(private usuarioSevice: UsuarioService,
     private messageService: MessageService,
     private route: ActivatedRoute,
     private location: Location) {}
     

  ngOnInit() {
    this.getUsuarios();
  }
    
  /*onSelect(user: Usuario): void {
      this.selectedUser = user;
      this.messageService.add(`UsuarioComponent: Selected usuario id=${user.id}`);
  }*/
  getUsuarios(): void {
    this.usuarioSevice.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }
  goBack(): void {
    this.location.back();
  }
}
