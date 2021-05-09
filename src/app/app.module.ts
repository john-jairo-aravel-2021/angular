import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarlistComponent } from './sidebar/sidebarlist/sidebarlist.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { HeaderchatComponent } from './mainbar/headerchat/headerchat.component';
import { AreachatComponent } from './mainbar/areachat/areachat.component';
import { SendmassageComponent } from './mainbar/sendmassage/sendmassage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarlistComponent,
    MainbarComponent,
    HeaderchatComponent,
    AreachatComponent,
    SendmassageComponent,
    RutaUnoComponent,
    RutaDosComponent,
    RutaTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
