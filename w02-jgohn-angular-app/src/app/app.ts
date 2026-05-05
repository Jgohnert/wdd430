import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
  // This is another way to add styles without using the css file
  // styles: [`
  //   h3 {
  //   color: red
  //   }
  // `]
})
export class App {
  username = '';
  showSecret = false;
  log: number[] = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
