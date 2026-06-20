import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();

  maxContactId!: number

  contacts: Contact [] =[];

  constructor(private http: HttpClient) {
    // this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  storeContacts() {
    JSON.stringify(this.contacts);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(
      'https://cms-app-fe1b1-default-rtdb.firebaseio.com/contacts.json',
      this.contacts,
      { headers: headers }
    )
    .subscribe({
      next: () => {
        console.log('Contact has been saved.');
      }
    });
  }

  getContacts() {
    this.http
      .get<Contact[]>(
        'https://cms-app-fe1b1-default-rtdb.firebaseio.com/contacts.json'
      )
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts
          this.maxContactId = this.getMaxId();
  
          this.contacts.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            } if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          });
  
          this.contactListChangedEvent.next(this.contacts.slice());
        },
        (error: any) => {
          console.error('An Error occured getting contacts:', error);
        }
      )
    }

  getContact(id: string): Contact {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0

    this.contacts.forEach(contact => {
      const currentId = parseInt(contact.id);

      if ( currentId > maxId ) {
        maxId = currentId
      }
    });

    return maxId;
  }

  addContact(newContact: Contact) {
    if ( !newContact ) {
      return;
    }

    this.maxContactId++
    newContact.id = String(this.maxContactId);

    this.contacts.push(newContact);

    this.storeContacts();
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if ( !originalContact || !newContact ) {
      return;
    }

    const pos = this.contacts.indexOf(originalContact)

    if ( pos < 0 ) {
      return;
    }

    newContact.id = originalContact.id;

    this.contacts[pos] = newContact;

    this.storeContacts();
  }

  deleteContact(contact: Contact) {
    if ( !contact ) {
      return;
    }

    const pos = this.contacts.indexOf(contact)
    if ( pos < 0 ) {
      return;
    }

    this.contacts.splice(pos, 1);

    this.storeContacts();
  }
}