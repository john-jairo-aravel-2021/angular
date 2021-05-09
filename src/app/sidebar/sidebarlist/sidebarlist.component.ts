import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { Contact } from './Icontact';

@Component({
  selector: 'app-sidebarlist',
  templateUrl: './sidebarlist.component.html',
  styleUrls: ['./sidebarlist.component.scss']
})
export class SidebarlistComponent implements OnInit {
  
  today = new Date();
  contactTest: Contact = {
    name: 'Andres',
    photo: '',
    lastMessage: '',
    lastDate: new Date(),
    messageList: []
  };
  list: any  = [];

  // fecha = new Date();

  constructor(private service: ChatService, private http: HttpClient) { }

  showChats(contact: any): void {
    // console.log(contact);
    this.service.showContact.emit(contact);
  }
  checkToday(lastDate: Date): boolean {
     return this.today.getDate() === lastDate.getDate() &&
     this.today.getMonth() === lastDate.getMonth() &&
     this.today.getFullYear() === lastDate.getFullYear();
  }
  checkYesterday(lastDate: Date): boolean {
    return (this.today.getDate() - 1 ) === lastDate.getDate() &&
    this.today.getMonth() === lastDate.getMonth() &&
    this.today.getFullYear() === lastDate.getFullYear();
 }

 checkOther(lastDate: Date): boolean {
  return this.today.getDate()  < lastDate.getDate() &&
  this.today.getMonth() <= lastDate.getMonth() &&
  this.today.getFullYear() <= lastDate.getFullYear();
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res =>{
      // console.log(res);
        this.list = (res as any[]).map(x => {
        x.messages = [];
        return x;
      });
    });
  }
  // onNewMessage(): void {
  //   this.servicio.onNewMessage().subscribe(msj =>{
  //     this.contact.onNewMessage.push(msj)
  //     return msj;
  //   });
  //   })
  // }
  // this.list.forEach((val2: { id: any; menssages: any[]; })  => {
  //   this.service.showContact.subscribe(val =>{
  //     if(val.id === val2.id ){
  //       this.service.messages.subscribe(val3 =>{
  //         val2.menssages.push(val3);
  //         console.log(val2.menssages);
  //       })
  //     }
  //   });
}