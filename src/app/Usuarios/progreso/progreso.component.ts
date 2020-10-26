import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../Clases/asignatura';
import { AsignaturaService } from '../../Services/asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../Services/usuario.service';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {
  //asignaturas :Asignatura[];
  asignaturas = new Array();
  estados= new Array();
  constructor(private asignaturaService: AsignaturaService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router,
    private toastr: ToastrService,
    private usuarioService:UsuarioService,
    private authService:AuthService) {}
    

  ngOnInit(): void {
    this.getAsignaturas();
  }
  getAsignaturas(): void {
    this.authService.getUser().subscribe(data => {

      for (const property in data.usuario.usuarioAsignaturas) {

        this.usuarioService.getUsuarioAsignatura(data.usuario.usuarioAsignaturas[property])
        .subscribe(data => {

          this.asignaturaService.getDetalleAsignatura(data.usuarioAsignatura.asignatura)
          .subscribe(dataDos => {
            this.asignaturas.push(dataDos.asignatura);
            this.estados.push(data.usuarioAsignatura.estado);
            
          })
        })

      }

    })
  }
  cambiarEstado(idAsig,estado,idUsuarioAsignatura){
    this.usuarioService.updateEstadoAsignatura(idUsuarioAsignatura,estado)
    .subscribe(data =>{
      alert(data.data);
      this.router.navigate(['/progreso']);
      });
  }
  nuevoEstado(){
    this.router.navigate(['/agregarAsig']);
  }

}
