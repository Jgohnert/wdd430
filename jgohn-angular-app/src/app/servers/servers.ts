import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  // This is an example of using html code in servers.ts file instead of the servers.html file
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './servers.css',
})
export class Servers {}
