import { Component, OnInit ,Input} from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})


export class DetalleUsuarioComponent implements OnInit {
  @Input() usuario: Usuario;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: UsuarioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getUsuario(id)
      .subscribe(user => this.usuario = user);
  }
  goBack(): void {
    this.location.back();
  }
}
