import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  idAdmin=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.pedirAdmin();
  }
  islogin(){
    return this.authService.loggedIn();
  }
  logOut(){
    this.authService.logOut();
  }
  isAdmin(){
    return this.idAdmin;
  }
  pedirAdmin(){
    this.authService.isAdmin().subscribe(data => {
      this.idAdmin=data.data;
    })
  }
}
