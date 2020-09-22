import { Component } from '@angular/core';
import { Persona} from './models/persona';
//import { guardarPregunta } from '../../controllers/pregunta.controller.js';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personasArray : Persona[] = [
    {id:1,nombre:"luis",pais:"uruguay"},
    {id:2,nombre:"juan",pais:"argentina"},
    {id:3,nombre:"pepe",pais:"brazil"},
  ];

  constructor(private http: HttpClient) { }

  selectedPersona: Persona = new Persona();

  addOrEdit(){
    if(this.selectedPersona.id === 0){
      this.selectedPersona.id = this.personasArray.length + 1;
      this.personasArray.push(this.selectedPersona);
    }
    
    this.selectedPersona= new Persona();
  }
  openForEdit(persona:Persona){
    this.selectedPersona=persona;
  }
  delete(){
    this.personasArray =this.personasArray.filter(x => x != this.selectedPersona)
    this.selectedPersona= new Persona();
  }
  guardarEnBasedeDatos(){
    alert("holis");
    this.http.post<any>('http://localhost:8080/preguntas/listado', {/*pregunta:"p r e g u n t a",respuesta:"respuesta a la pregunta"*/}).subscribe(data => {
    alert(data.data[0].pregunta);
})
  }
}