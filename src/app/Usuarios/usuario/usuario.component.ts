import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Clases/usuario';
import { UsuarioService } from '../../Services/usuario.service';
import { Location } from '@angular/common';
import {AuthService} from '../../Services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios :Usuario[];
  //selectedUser: Usuario;

  constructor(private usuarioSevice: UsuarioService,
     private route: ActivatedRoute,
     private location: Location,
     private authService:AuthService,
     private toastr:ToastrService) {}
     

  ngOnInit() {
    this.getUsuarios();
  }
    
  /*onSelect(user: Usuario): void {
      this.selectedUser = user;
      this.messageService.add(`UsuarioComponent: Selected usuario id=${user.id}`);
  }*/
  getUsuarios(): void {
    this.usuarioSevice.getUsuarios()
    .subscribe(usuarios =>{
    this.usuarios = usuarios.data;
    });
  }
  goBack(): void {
    this.location.back();
  }
  borrarUsuario(id){
    if(confirm("Estas seguro que desea eliminar la cuenta? esta accion es permantente")){
      this.usuarioSevice.borrarUsuario(id).subscribe(data => {
        this.toastr.success(data.data);
        this.getUsuarios();
      })
      if(id==this.authService.getActualUser()){
        this.toastr.success("Elimino su propia cuenta, volviendo al menu proncipal");
        this.authService.logOut();
      }
    }
  }
}
