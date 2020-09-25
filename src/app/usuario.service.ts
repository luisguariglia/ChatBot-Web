import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { USUARIOS } from './mock-usuarios';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httpUrl = 'http://localhost:8080/';  // URL to web api
  constructor( private http: HttpClient,
    private messageService: MessageService) { }

  getUsuarios(): Observable<Usuario[]> {
    this.messageService.add('UserService: fetched users');
    return of(USUARIOS);
  }
  getUsuario(id: number): Observable<Usuario> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(USUARIOS.find(hero => hero.id === id));
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
