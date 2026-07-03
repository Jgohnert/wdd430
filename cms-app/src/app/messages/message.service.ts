import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
// import { MOCKMESSAGES } from './MOCKMESSAGES'; 
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
      // 'https://cms-app-fe1b1-default-rtdb.firebaseio.com/messages.json',
      'http://localhost:3000/messages',
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
        // 'https://cms-app-fe1b1-default-rtdb.firebaseio.com/messages.json'
        'http://localhost:3000/messages'
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
    if (!message) {
      return;
    }

    // make sure id of the new message is empty
    message.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ messages: string, message: Message }>('http://localhost:3000/messages',
      message,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new message to messages
          this.messages.push(responseData.message);
          // this.sortAndSend();
        }
      );
  }

  updateMessage(originalMessage: Message, newMessage: Message) {
    if (!originalMessage || !newMessage) {
      return;
    }

    const pos = this.messages.findIndex(d => d.id === originalMessage.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Message to the id of the old Message
    newMessage.id = originalMessage.id;
    newMessage._id = originalMessage._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/messages/' + originalMessage.id,
      newMessage, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.messages[pos] = newMessage;
          // this.sortAndSend();
        }
      );
  }

  deleteMessage(message: Message) {
  
    if (!message) {
      return;
    }

    const pos = this.messages.findIndex(d => d.id === message.id);

    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('http://localhost:3000/messages/' + message.id)
      .subscribe(
        (response: Response) => {
          this.messages.splice(pos, 1);
          // this.sortAndSend();
        }
      );
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