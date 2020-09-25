import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    DetalleUsuarioComponent,
    MessagesComponent,
    ChatComponent,
    MenuAdminComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
