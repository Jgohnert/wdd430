import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // hides the angular assigned CSS attributes. And overrides the CSS, 
  // that way, CSS in this file can be applied project wide.
  encapsulation: ViewEncapsulation.Emulated // you can also use None or Native to override
})
export class ServerElementComponent {
  @Input('srvElement') element!: {type: string, name: string, content: string};

}
