import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  standalone: false,
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css',
})
export class ContactEditComponent implements OnInit {
  groupContacts: Contact[] = [];
  originalContact: Contact;
  contact: Contact;
  editMode: boolean = false;
  id: string;

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        const id = params['id'];

        if (!id) {
          this.editMode = false;
          return;
        }
        
        this.originalContact = this.contactService.getContact(id)

        if (!this.originalContact) {
          return;
        }

        this.editMode = true;
        this.contact = JSON.parse(JSON.stringify(this.originalContact))
  
        if (this.originalContact.group) {
          this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
        }
    }) 
  }

  onRemoveItem(index: number) {
    this.groupContacts.splice(index, 1);
  }

  onSubmit(form: NgForm) {
    const value = form.value
        const newContact = new Contact(
          value.id, 
          value.name, 
          value.email, 
          value.phone, 
          value.imageUrl,
          value.group
        );
    
        if (this.editMode) {
          this.contactService.updateContact(this.originalContact, newContact)
        } else {
          this.contactService.addContact(newContact)
        }
         
        this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}
