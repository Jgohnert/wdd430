import { Component } from '@angular/core';
import { DiceService } from './dice.service';

@Component({
  selector: 'app-dice',
  standalone: false,
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css',
})
export class DiceComponent {
  randomNumber = 1;
  diceImage = '';
  overlay = false;

  constructor(private diceService: DiceService) {}

  ngOnInit() {
    this.diceService.roll$.subscribe(roll => {
      if (!roll) return;

      this.randomNumber = roll.number;
      this.diceImage = roll.image;
      this.overlay = true;

    });
  }

  closeOverlay() {
    this.overlay = false;
  }
}
