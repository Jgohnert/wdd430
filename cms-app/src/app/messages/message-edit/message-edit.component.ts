import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Message } from '../message.model'

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})

export class MessageEditComponent {
  currentSender: string = 'Joanna Gohnert';
  message: Message = new Message(0, '', '', '');

  @ViewChild('subjectInput', { static: false }) subjectInputRef!: ElementRef;
  @ViewChild('messageInput', { static: false }) messageInputRef!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  onSendMessage() {
    const senderName = this.subjectInputRef.nativeElement.value;
    const senderMessage = this.messageInputRef.nativeElement.value;
    
    const newMessage = new Message(
      1, 
      senderName, 
      senderMessage,
      this.currentSender
    );

    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.value = '';
  }
}
