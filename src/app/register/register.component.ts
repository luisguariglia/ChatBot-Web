import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
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
  constructor(private http: HttpClient,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.auth.registerUser(this.cedula,this.nombre,this.apellido,this.password)
    .subscribe(data => {
      alert(data.data);
      if(data.data=="Usuario agregado con éxito"){
        
        this.auth.loginUser(this.cedula,this.password)
        .subscribe(data => {
          if(data.ok){
            localStorage.setItem("token",data.token);
            this.router.navigate(['/chat']);
          }
        }
        );

      }
    }
    );
    
  }
  cancelar(){
    /*this.nombre:string;
    this.cedula:string;
    this.apellido:string;
    this.password:string;
    this.admin:boolean;*/
    this.router.navigate(['/inicio']);
  }
}
