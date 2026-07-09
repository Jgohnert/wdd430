import { Pipe, PipeTransform } from '@angular/core';
import { Spell } from './spells.model';

@Pipe({
  name: 'spellsFilter',
  standalone: false,
})

export class SpellsFilterPipe implements PipeTransform {
  transform(spells: Spell[], term: string): Spell[] {
    let filteredSpells: Spell[] = []; 

   if (term && term.length > 0) {
      filteredSpells = spells.filter(
         (spell: Spell) => spell.name.toLowerCase().includes(term.toLowerCase())
      );
      return filteredSpells;
   }
   return spells;
  }
}
