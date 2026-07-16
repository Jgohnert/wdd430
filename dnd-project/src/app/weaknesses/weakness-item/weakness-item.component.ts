import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monster } from '../../monsters/monsters.model';

@Component({
  selector: 'app-weakness-item',
  standalone: false,
  templateUrl: './weakness-item.component.html',
  styleUrl: './weakness-item.component.css',
})
export class WeaknessItemComponent {
  @Input() monster: Monster;
  @Output() monsterSelected = new EventEmitter<void>();


  onSelected() {
    this.monsterSelected.emit();
  }
}
