import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Monster } from '../../monsters/monsters.model';
import { MonsterService } from '../../monsters/monster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weaknesses-list',
  standalone: false,
  templateUrl: './weakness-list.component.html',
  styleUrl: './weakness-list.component.css',
})
export class WeaknessListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  monsters: Monster[] = [];
  term: string;

  constructor(public monsterService: MonsterService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.monsterService.monsterListChangedEvent
      .subscribe(
        (monstersList: Monster[]) => {
          console.log("Monsters received:", monstersList);
          this.monsters = monstersList;
          this.cd.detectChanges();
        }
      );
      
    this.monsterService.getMonsters();
    
    this.monsterService.monsterChangedEvent
      .subscribe(
        (monsters: Monster[]) => {
          this.monsters = monsters;
        }
      );
  }

  search(value: string) {
    this.term = value;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
