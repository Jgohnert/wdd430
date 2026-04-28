import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  standalone: false,
  template: `
  <p>This is a test warning</p>
  `,
  styles: [
    `p {
        padding: 10px;
        margin-right: 70%;
        background-color: red;
        color: white;
    }`
  ]
})
export class WarningAlert {}