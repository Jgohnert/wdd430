import { Component } from '@angular/core';
import { Spell } from './spells.model';
import { SpellService } from './spell.service';

@Component({
  selector: 'app-spells',
  standalone: false,
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css',
})
export class SpellsComponent {
  selectedSpell: Spell;

  constructor(private spellService: SpellService) { }

  ngOnInit() {
    this.spellService.spellSelectedEvent
      .subscribe(
        (spell: Spell) => {
          this.selectedSpell = spell;
        }
      );
  }
}
