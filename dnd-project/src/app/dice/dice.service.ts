import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface DiceRoll {
  number: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})

export class DiceService {
  private diceRollEvent = new BehaviorSubject<DiceRoll | null>(null);

  roll$ = this.diceRollEvent.asObservable();

  rollD20() {
    this.diceRollEvent.next({
      number: Math.floor(Math.random() * 20) + 1,
      image: 'images/dice-d20.jpg'
    });
  }

  rollD12() {
    this.diceRollEvent.next({
      number: Math.floor(Math.random() * 12) + 1,
      image: 'images/dice-d12.jpg'
    });
  }

  rollD10() {
    this.diceRollEvent.next({
      number: Math.floor(Math.random() * 10) + 1,
      image: 'images/dice-d10.jpg'
    });
  }

  rollD8() {
    this.diceRollEvent.next({
      number: Math.floor(Math.random() * 8) + 1,
      image: 'images/dice-d8.jpg'
    });
  }

  rollD6() {
    this.diceRollEvent.next({
      number: Math.floor(Math.random() * 6) + 1,
      image: 'images/dice-d6.jpg'
    });
  }

  rollD4() {
    this.diceRollEvent.next({
      number: Math.floor(Math.random() * 4) + 1,
      image: 'images/dice-d4.jpg'
    });
  }
}
