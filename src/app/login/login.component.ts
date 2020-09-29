import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cedula:string;
  password:string;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    alert(this.cedula+" "+this.password);
    this.http.post<any>('http://localhost:8080/usuario/login', {
      cedula:this.cedula,
      contrasenia:this.password,
      }).subscribe(data => {alert(data.ok);})

    this.router.navigate(['/chat']);
    }
    
}
