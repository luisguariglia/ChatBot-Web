import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../asignatura';
import { AsignaturaService } from '../asignatura.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-asignaturas-admin',
  templateUrl: './asignaturas-admin.component.html',
  styleUrls: ['./asignaturas-admin.component.css']
})
export class AsignaturasAdminComponent implements OnInit {
  asignaturas :Asignatura[];
  constructor(private asignaturaService: AsignaturaService,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router) {}
    

  ngOnInit(): void {
    this.getAsignaturas();
  }
  getAsignaturas(): void {
    this.asignaturaService.getAsignaturas()
    .subscribe(asignaturas =>{
    this.asignaturas = asignaturas.data;
    });
  }
  goBack(): void {
    this.router.navigateByUrl('/menuadmin');
  }
  editarSelect(asignatura){
    this.router.navigateByUrl('/verAsignatura', { state: { asignatura: asignatura } });
  }

  editarHorarios(asignatura){
    this.router.navigateByUrl('/horarios', { state: { asignatura: asignatura } });
  }
}
