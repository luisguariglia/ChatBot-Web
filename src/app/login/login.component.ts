import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    cedula: new FormControl('',[
    Validators.required,
    Validators.minLength(8)
    ]),
    password: new FormControl('',
    Validators.required
    ),
  });
  constructor(private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUser(this.profileForm.value.cedula,this.profileForm.value.password)
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
