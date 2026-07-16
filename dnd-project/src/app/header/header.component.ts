import { Component } from '@angular/core';
import { DiceService } from '../dice/dice.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isCollapsed = true;
  diceDropdown = false;

  constructor(private diceService: DiceService) {}

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  generateDtwenty() {
    this.diceService.rollD20();
  }

  generateDtwelve() {
    this.diceService.rollD12();
  }

  generateDten() {
    this.diceService.rollD10();
  }

  generateDeight() {
    this.diceService.rollD8();
  }

  generateDsix() {
    this.diceService.rollD6();
  }

  generateDfour() {
    this.diceService.rollD4();
  }
}
