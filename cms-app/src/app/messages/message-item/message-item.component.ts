import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-item',
  standalone: false,
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css',
})
export class MessageItemComponent {
  @Input() message!: Message;
  @Output() messageSelected = new EventEmitter<void>();


  onSelected() {
    this.messageSelected.emit();
  }
}
