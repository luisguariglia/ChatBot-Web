import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChatComponent } from './chat/chat.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './auth.guard';
import { AsignaturasAdminComponent } from './asignaturas-admin/asignaturas-admin.component';
import { NuevaAsignaturaComponent } from './nueva-asignatura/nueva-asignatura.component';
import { VerAsignaturaComponent } from './ver-asignatura/ver-asignatura.component';
import { HorariosAsignaturasComponent } from './horarios-asignaturas/horarios-asignaturas.component';
import { EditarHorarioComponent } from './editar-horario/editar-horario.component';
import { NuevoHorarioComponent } from './nuevo-horario/nuevo-horario.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent,canActivate:[!AuthGuard] },
  { path: 'inicio', component: InicioComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'menuadmin', component: MenuAdminComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'perfil', component: PerfilComponent,canActivate:[AuthGuard] },
  { path: 'asignaturasAdmin', component: AsignaturasAdminComponent},
  { path: 'nuevaAsignatura', component: NuevaAsignaturaComponent},
  { path: 'verAsignatura', component: VerAsignaturaComponent},
  { path: 'horarios', component: HorariosAsignaturasComponent},
  { path: 'verHorario', component: EditarHorarioComponent},
  { path: 'nuevoHorario', component: NuevoHorarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }