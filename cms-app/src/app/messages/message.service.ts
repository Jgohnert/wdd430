import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageListChangedEvent = new Subject<Message[]>();

  messages: Message[] = []

  maxMessageId: number

  constructor(private http: HttpClient) {
    // this.messages = MOCKMESSAGES;
    this.maxMessageId = this.getMaxId()
    this.getMessages()
  }

  storeMessages() {
    JSON.stringify(this.messages);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(
      'https://cms-app-fe1b1-default-rtdb.firebaseio.com/messages.json',
      this.messages,
      { headers: headers }
    )
    .subscribe({
      next: () => {
        console.log('message has been saved.');
      }
    });
  }

  getMessages() {
    return this.http
      .get<Message[]>(
        'https://cms-app-fe1b1-default-rtdb.firebaseio.com/messages.json'
      )
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
          this.maxMessageId = this.getMaxId();
  
  
          this.messageListChangedEvent.next(this.messages.slice());
        },
        (error: any) => {
          console.error('An Error occured getting messages:', error);
        }
      )
  }
    
  getMessage(id: string): Message {
    for (let message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }
    return null;
  }

  addMessage(message: Message) {
    if ( !message ) {
      return;
    }

    this.maxMessageId++
    message.id = String(this.maxMessageId);

    this.messages.push(message);
    
    this.storeMessages();
    this.messageListChangedEvent.next(this.messages.slice());
  }

  getMaxId(): number {
    let maxId = 0

    this.messages.forEach(Message => {
      const currentId = parseInt(Message.id);

      if ( currentId > maxId ) {
        maxId = currentId
      }
    });

    return maxId;
  }
}
