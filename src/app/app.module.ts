import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarlistComponent } from './sidebar/sidebarlist/sidebarlist.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { HeaderchatComponent } from './mainbar/headerchat/headerchat.component';
import { AreachatComponent } from './mainbar/areachat/areachat.component';
import { SendmassageComponent } from './mainbar/sendmassage/sendmassage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarlistComponent,
    MainbarComponent,
    HeaderchatComponent,
    AreachatComponent,
    SendmassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
