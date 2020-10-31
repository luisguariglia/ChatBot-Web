import { Injectable } from '@angular/core';
import { Usuario } from '../Clases/usuario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private httpUrl = 'http://localhost:8080/';  // URL to web api
  constructor( private http: HttpClient,
    private authService:AuthService) { }

  getUsuarios(){
    return this.http.post<any>('http://localhost:8080/usuario/listado', {});
  }
  borrarUsuario(id){
    return this.http.post<any>('http://localhost:8080/usuario/delete', {
      id:id,
      });
  }
  //getUsuario(id: number): Observable<Usuario> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    //return of(USUARIOS.find(hero => hero.id === id));
  //}
  updateEstadoAsignatura(id,estado){
    return this.http.post<any>('http://localhost:8080/usuario/updateUA', {
      id:id,
      estado:estado
      });
  }
  borrarEstadoAsignatura(id){
    return this.http.post<any>('http://localhost:8080/usuario/usuarioAsignaturaDelete', {
      id:id
      });
  }
  nuevoEstadoAsignatura(id,estado){
    return this.http.post<any>('http://localhost:8080/usuario/asignaturaNuevo', {
      idUser:this.authService.getActualUser(),
      idAsig:id,
      estado:estado
      });
  }
  getUsuarioAsignatura(id){      //pedir un usuarioasignatura especifico
    return this.http.post<any>('http://localhost:8080/usuario/detalleUA', {
      id:id,
      });
  }

}
