import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MessagesComponent } from './messages/messages.component';
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
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    DetalleUsuarioComponent,
    MessagesComponent,
    ChatComponent,
    MenuAdminComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent, 
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
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
