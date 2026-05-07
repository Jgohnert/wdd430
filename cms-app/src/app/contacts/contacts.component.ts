import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'cms-contact-list',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  selectedContact!: Contact;
}
