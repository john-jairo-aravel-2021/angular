import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

    @Output() showContact = new EventEmitter();
    @Output() messages = new EventEmitter();

  constructor() { }
}
