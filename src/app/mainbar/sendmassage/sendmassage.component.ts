import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/chat.service';
import { WebsocketService } from 'src/app/websocket.service';
import { AreachatComponent } from '../areachat/areachat.component';

@Component({
  selector: 'app-sendmassage',
  templateUrl: './sendmassage.component.html',
  styleUrls: ['./sendmassage.component.scss']
})
export class SendmassageComponent implements OnInit {

  mensaje = new FormControl('',Validators.required);

  constructor(private service: ChatService, private web: WebsocketService) { }

  send(): void {
    this.service.messages.emit(this.mensaje.value);
    this.web.sendMessage(this.mensaje.value);
    this.mensaje.reset();
    // console.log(this.mensaje.value)
  }

  sendEnter(ev: KeyboardEvent): void{
    // console.log(ev);
    if (ev.key === 'Enter'){
      this.send();
    }
  }

  ngOnInit(): void {
    // this.mensaje.valueChanges.subscribe(val => {
    //   console.log(val);
    // });
  }

}
