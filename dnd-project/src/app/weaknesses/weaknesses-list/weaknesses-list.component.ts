import { Component } from '@angular/core';

@Component({
  selector: 'app-weaknesses-list',
  standalone: false,
  templateUrl: './weaknesses-list.component.html',
  styleUrl: './weaknesses-list.component.css',
})
export class WeaknessesListComponent {
  term: string;
  
  search(value: string) {
    this.term = value;
  }
}
