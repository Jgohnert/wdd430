import { Component } from '@angular/core';
import { Monster } from './monsters.model';
import { MonsterService } from './monster.service';

@Component({
  selector: 'app-monsters',
  standalone: false,
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.css',
})
export class MonstersComponent {
  selectedMonster: Monster;
  
    constructor(private monsterService: MonsterService) { }
  
    ngOnInit() {
      this.monsterService.monsterSelectedEvent
        .subscribe(
          (monster: Monster) => {
            this.selectedMonster = monster;
          }
        );
    }
}
