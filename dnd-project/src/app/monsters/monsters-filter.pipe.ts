import { Pipe, PipeTransform } from '@angular/core';
import { Monster } from './monsters.model';

@Pipe({
  name: 'monstersFilter',
  standalone: false,
})

export class MonstersFilterPipe implements PipeTransform {
  transform(monsters: Monster[], term: string): Monster[] {
    let filteredMonsters: Monster[] = []; 

   if (term && term.length > 0) {
      filteredMonsters = monsters.filter(
         (monster: Monster) => monster.name.toLowerCase().includes(term.toLowerCase())
      );
      return filteredMonsters;
   }
   return monsters;
  }
}
