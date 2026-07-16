import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monster } from '../monsters.model';

@Component({
  selector: 'app-monster-item',
  standalone: false,
  templateUrl: './monster-item.component.html',
  styleUrl: './monster-item.component.css',
})
export class MonsterItemComponent {
  @Input() monster: Monster;
  @Output() monsterSelected = new EventEmitter<void>();


  onSelected() {
    this.monsterSelected.emit();
  }
}
