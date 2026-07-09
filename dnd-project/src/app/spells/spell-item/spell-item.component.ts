import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spell } from '../spells.model';

@Component({
  selector: 'app-spell-item',
  standalone: false,
  templateUrl: './spell-item.component.html',
  styleUrl: './spell-item.component.css',
})
export class SpellItemComponent {
  @Input() spell: Spell;
  @Output() spellSelected = new EventEmitter<void>();


  onSelected() {
    this.spellSelected.emit();
  }
}
