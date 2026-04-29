import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('cms');
}
