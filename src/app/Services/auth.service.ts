import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { variablesGlobales } from "./variablesGlobales";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //userActual:string = 'prueba';

  constructor(private http: HttpClient,
    private router:Router) { 
    }


  getActualUser(){
    //return variablesGlobales.getActualUser();
    return localStorage.getItem("actualUser");
  }
  setActualUser(id:string){ 
    //this.userActual=id;
    localStorage.setItem("actualUser",id);
  }
  registerUser(cedula,nombre,apellido,password){
    //http://localhost:8080
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/nuevo', {
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      contrasenia:password,
      admin:false,
      });
  }
  loginUser(cedula,password){
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/login', {
      cedula:cedula,
      contrasenia:password,
      });
  }
  getUser(){
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/detalle', {
      id:this.getActualUser(),
      });
  }
  loggedIn(){
    return !!localStorage.getItem("token");
  }
  isAdmin(){
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/verify', {
      id:this.getActualUser(),
      });
  }
  getToken(){
    return localStorage.getItem("token");
  }
  updateUser(cedula,nombre,apellido){
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/update', {
      id:this.getActualUser(),
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      });
  }
  updateContrasenia(actual,contrasenia){
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/updatePassword', {
      id:this.getActualUser(),
      actual:actual,
      contrasenia:contrasenia,
      });
  }
  eliminarUsuario(){
    return this.http.post<any>('https://chatbot-tip-backend.herokuapp.com/usuario/delete', {
      id:this.getActualUser(),
      });
  }
  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("actualUser");
    this.router.navigate(['/inicio']);
  }
}
