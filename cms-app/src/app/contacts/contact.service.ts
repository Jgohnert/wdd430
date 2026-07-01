import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
// import { MOCKCONTACTS } from './MOCKCONTACTS';
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
      // 'https://cms-app-fe1b1-default-rtdb.firebaseio.com/contacts.json',
      'http://localhost:3000/contacts',
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
      .get<{ message: string, contacts: Contact[] }>(
        // 'https://cms-app-fe1b1-default-rtdb.firebaseio.com/contacts.json'
        'http://localhost:3000/contacts'
      )
      .subscribe(response => {

        this.contacts = response.contacts;

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

  addContact(contact: Contact) {
    if (!contact) {
      return;
    }

    // make sure id of the new Contact is empty
    contact.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, contact: Contact }>('http://localhost:3000/contacts',
      contact,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new contact to contacts
          this.contacts.push(responseData.contact);
          // this.sortAndSend();
        }
      );
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    const pos = this.contacts.findIndex(d => d.id === originalContact.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Contact to the id of the old Contact
    newContact.id = originalContact.id;
    newContact._id = originalContact._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/contacts/' + originalContact.id,
      newContact, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.contacts[pos] = newContact;
          // this.sortAndSend();
        }
      );
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    const pos = this.contacts.findIndex(d => d.id === contact.id);

    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe(
        (response: Response) => {
          this.contacts.splice(pos, 1);
          // this.sortAndSend();
        }
      );
  }
}