import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('cms-app');

  loadedFeature = 'contact';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
