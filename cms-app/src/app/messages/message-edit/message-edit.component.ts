import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Message } from '../message.model'
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})

export class MessageEditComponent {
  currentSender: string = 'Joanna Gohnert';
  message: Message = new Message('0', '', '', '');

  @ViewChild('subjectInput', { static: false }) subjectInputRef!: ElementRef;
  @ViewChild('messageInput', { static: false }) messageInputRef!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor(public messageService: MessageService) { }

  onSendMessage() {
    const senderName = this.subjectInputRef.nativeElement.value;
    const senderMessage = this.messageInputRef.nativeElement.value;
    
    const newMessage = new Message(
      '',
      senderName, 
      senderMessage,
      this.currentSender);
      this.messageService.addMessage(newMessage);
    }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.value = '';
  }
}