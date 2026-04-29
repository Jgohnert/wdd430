import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app.component';
import { HeaderComponent } from './header.component';
import { Contacts } from './contacts/contacts.component';
import { ContactDetail } from './contacts/contact-detail/contact-detail';
import { ContactList } from './contacts/contact-list/contact-list';

@NgModule({
  declarations: [
    App, 
    HeaderComponent,
    Contacts,
    ContactDetail,
    ContactList
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule {}
