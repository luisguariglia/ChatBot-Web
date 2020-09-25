import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChatComponent } from './chat/chat.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
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