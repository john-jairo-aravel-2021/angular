import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  web = new WebSocket('wss://webskocet.herokuapp.com');


  sendMessage(msg: string): void{
    this.web.send(msg);
  }

  
  onNewMessage(): Observable<any> {
    return new Observable(observer => {
      this.web.onmessage = (msg => {
        observer.next(msg);
      });
    });
  }

  constructor() { }
}
