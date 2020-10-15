import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { TokenInterceptorService} from './token-interceptor.service';
import { AsignaturasAdminComponent } from './asignaturas-admin/asignaturas-admin.component';
import { NuevaAsignaturaComponent } from './nueva-asignatura/nueva-asignatura.component';
import { VerAsignaturaComponent } from './ver-asignatura/ver-asignatura.component';
import { HorariosAsignaturasComponent } from './horarios-asignaturas/horarios-asignaturas.component';
import { NuevoHorarioComponent } from './nuevo-horario/nuevo-horario.component';
import { EditarHorarioComponent } from './editar-horario/editar-horario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ChatComponent,
    MenuAdminComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent, 
    PerfilComponent, AsignaturasAdminComponent, NuevaAsignaturaComponent, VerAsignaturaComponent, HorariosAsignaturasComponent, NuevoHorarioComponent, EditarHorarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [AuthService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
