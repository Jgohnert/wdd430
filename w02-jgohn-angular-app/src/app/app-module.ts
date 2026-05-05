import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ServerComponent } from './server/server.component';
import { Servers } from './servers/servers';
import { SuccessAlert } from './success-alert/success-alert';
import { WarningAlert } from './alert/alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, ServerComponent, Servers, SuccessAlert, WarningAlert],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
