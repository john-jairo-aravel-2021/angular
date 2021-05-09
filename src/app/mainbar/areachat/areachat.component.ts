import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from 'src/app/chat.service';
import { WebsocketService } from 'src/app/websocket.service';

@Component({
  selector: 'app-areachat',
  templateUrl: './areachat.component.html',
  styleUrls: ['./areachat.component.scss']
})
export class AreachatComponent implements OnInit {



  contact: any = {};

  constructor(private service: ChatService, private servicio: WebsocketService) { }

  ngOnInit(): void {

    this.servicio.onNewMessage().subscribe(val =>{
      this.contact.messages.push(val.data);
      //console.log(val.data);
    });

    this.service.messages.subscribe(val => {
      this.contact.messages.push(val);
      //console.log(this.contact.messages);
    });
    this.service.showContact.subscribe(val => {
      this.contact = val;

    });
  }
  // onNewMessage(): void {
  //   this.servicio.onNewMessage().subscribe(msj =>{
  //     this.contact.onNewMessage.push(msj)
  //   });
  // }


}
