import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChatComponent } from './chat/chat.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'menuadmin', component: MenuAdminComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'detail/:id', component: DetalleUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }