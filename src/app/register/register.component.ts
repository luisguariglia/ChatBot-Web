import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  contraseniaDiferente:boolean;
  //repassword
 profileForm = new FormGroup({
  cedula: new FormControl('',[
  Validators.required,
  Validators.minLength(8)
  ]),
  password: new FormControl('',[
    Validators.required,
    Validators.minLength(8)
    ]),
  nombre: new FormControl('',[
    Validators.required,
    ]), 
  apellido: new FormControl('',[
    Validators.required,
    ]),
  repassword: new FormControl('',[
     Validators.required
    ]),  
});
  admin:boolean;



  constructor(private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addUser(){
    if(this.profileForm.value.password==this.profileForm.value.repassword){
    this.auth.registerUser(this.profileForm.value.cedula,
      this.profileForm.value.nombre,
      this.profileForm.value.apellido,
      this.profileForm.value.password
      )
    .subscribe(data => {
      alert(data.data);
      if(data.data=="Usuario agregado con éxito"){
        this.contraseniaDiferente=false;
        this.auth.loginUser(this.profileForm.value.cedula,this.profileForm.value.password)
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
  }else{
    this.contraseniaDiferente=true;
  }
    
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
