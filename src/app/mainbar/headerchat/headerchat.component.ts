import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-headerchat',
  templateUrl: './headerchat.component.html',
  styleUrls: ['./headerchat.component.scss']
})
export class HeaderchatComponent implements OnInit {

  photo = '';
  name = '';

  constructor(private service: ChatService) { }

  ngOnInit(): void {
    this.service.showContact.subscribe(val => {
      console.log(val);
      this.name = val.name;
      this.photo = val.photo;
    });
  }

}
