import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // Different ways you can select
  // selector: '[app-servers]',
  // This is how you select by class
  // selector: '.app-servers',
  standalone: false,
  // This is an example of using html code in servers.ts file instead of the servers.html file
  // template is used for this instead of templateUrl
  // Use the html file if you have more than 3 lines of code in template
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class Servers {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
