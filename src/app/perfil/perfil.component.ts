import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public id:string;
  nombre:string;
  apellido:string;
  cedula:string;
  editando:boolean;

  cambiandoContrasenia:boolean;

  //contraseña
  actual:string;
  nueva:string;
  confirmar:string;


  constructor(private authService:AuthService) { 
    this.cambiandoContrasenia=false;
  }

  ngOnInit(): void {
    this.editando=false;
    this.id=this.authService.getActualUser();
    this.authService.getUser().subscribe(data => {
      this.nombre=data.usuario.nombre;
      this.apellido=data.usuario.apellido;
      this.cedula=data.usuario.cedula;
    })
  }
  editar(){
    this.authService.updateUser(this.cedula,this.nombre,this.apellido).subscribe(data => {
      if(data.data=="Usuario modificado con exito"){
        alert("Usuario modificado con exito");
      }else{
        alert(data.data);
      }
    })
  }
  habilitarCambiarContrasenia(){
    this.cambiandoContrasenia=true;
  }
  cambiarContrasenia(){
    this.authService.updateContrasenia(this.actual,this.nueva).subscribe(data => {
      alert(data.data);
    })
    this.cambiandoContrasenia=false;
  }
  eliminarUsuario(){
    if(confirm("Estas seguro que desea eliminar la cuenta? esta accion es permantente")){
      this.authService.eliminarUsuario().subscribe(data => {
        alert(data.data);
      })
    }
  }

}
