import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    standalone: false,
    templateUrl: './server.component.html',
    styles: [`
      .online {
        color:white;
      }
    `]
})

export class ServerComponent {
    serverId: number = 10
    serverStatus: string = 'offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    // You can use this to call a method. It can return something that can be converted to a string.
    // getServerStatus() {
    //     return this.serverStatus;
    // }
}