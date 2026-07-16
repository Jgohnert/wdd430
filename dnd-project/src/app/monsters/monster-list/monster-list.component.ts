import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Monster } from '../monsters.model';
import { MonsterService } from '../monster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster-list',
  standalone: false,
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css',
})
export class MonsterListComponent implements OnInit, OnDestroy {
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
