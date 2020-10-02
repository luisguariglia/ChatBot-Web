import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {


  constructor(private http: HttpClient) { }


  getActualUser(){
    return localStorage.getItem("actualUser");
  }
  setActualUser(id){ 
    localStorage.setItem("actualUser",id);
  }
  registerUser(cedula,nombre,apellido,password){
    return this.http.post<any>('http://localhost:8080/usuario/nuevo', {
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      contrasenia:password,
      admin:false,
      });
  }
  loginUser(cedula,password){
    return this.http.post<any>('http://localhost:8080/usuario/login', {
      cedula:cedula,
      contrasenia:password,
      });
  }
  getUser(){
    return this.http.post<any>('http://localhost:8080/usuario/detalle', {
      id:this.getActualUser(),
      });
  }
  loggedIn(){
    return !!localStorage.getItem("token");
  }
  getToken(){
    return localStorage.getItem("token");
  }
  updateUser(cedula,nombre,apellido){
    return this.http.post<any>('http://localhost:8080/usuario/update', {
      id:this.getActualUser(),
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      });
  }
  updateContrasenia(actual,contrasenia){
    return this.http.post<any>('http://localhost:8080/usuario/updatePassword', {
      id:this.getActualUser(),
      actual:actual,
      contrasenia:contrasenia,
      });
  }
  eliminarUsuario(){
    return this.http.post<any>('http://localhost:8080/usuario/delete', {
      id:this.getActualUser(),
      });
  }
}
