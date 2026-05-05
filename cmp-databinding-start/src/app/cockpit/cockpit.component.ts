import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  newServerContent = '';
  
  onAddServer(NameInput: HTMLInputElement) {
    console.log(NameInput.value)
    this.serverCreated.emit({
      serverName: NameInput.value, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(NameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName, 
      serverName: NameInput.value, 
      serverContent: this.newServerContent
    });
  }
}
