import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cedula:string;
  password:string;

  constructor(private http: HttpClient,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUser(this.cedula,this.password)
    .subscribe(data => {
      if(data.ok){
        //alert(data.usuario.id);
        this.auth.setActualUser(data.usuario.id);
        localStorage.setItem("token",data.token);
        this.router.navigate(['/chat']);
        
      }
    }
    );
    
    }
    
}
