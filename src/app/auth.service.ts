import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
  loggedIn(){
    return !!localStorage.getItem("token");
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
