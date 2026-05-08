import { Component, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  
  messages: Message[] = [
    new Message(
      1,
      'subject1',
      'This is message1',
      'sender\'s name1'
    ),
    new Message(
      2,
      'subject2',
      'This is message2',
      'sender\'s name2'
    ),
    new Message(
      3,
      'subject3',
      'This is message3',
      'sender\'s name3'
    )
  ];

  onAddMessage(message: Message) {
   this.messages.push(message);
  }
}
