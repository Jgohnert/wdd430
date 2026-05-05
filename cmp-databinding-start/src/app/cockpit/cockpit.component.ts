import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: false}) serverContentInput!: ElementRef;
  
  onAddServer(NameInput: HTMLInputElement) {
    console.log(NameInput.value);
    this.serverCreated.emit({
      serverName: NameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(NameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName, 
      serverName: NameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
