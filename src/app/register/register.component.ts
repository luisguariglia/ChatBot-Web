import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre:string;
  cedula:string;
  apellido:string;
  password:string;
  admin:boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addUser(){
    this.http.post<any>('http://localhost:8080/usuario/nuevo', {
      cedula:this.cedula,
      nombre:this.nombre,
      apellido:this.apellido,
      contrasenia:this.password,
      admin:false,
      }).subscribe(data => {alert(data.data);})
      }
}
