import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Spell } from '../spells.model';
import { SpellService } from '../spell.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spell-list',
  standalone: false,
  templateUrl: './spell-list.component.html',
  styleUrl: './spell-list.component.css',
})
export class SpellListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  spells: Spell[] = [];
  term: string;

  constructor(public spellService: SpellService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.spellService.spellListChangedEvent
      .subscribe(
        (spellsList: Spell[]) => {
          console.log("Spells received:", spellsList);
          this.spells = spellsList;
          this.cd.detectChanges();
        }
      );
      
    this.spellService.getSpells();
    
    this.spellService.spellChangedEvent
      .subscribe(
        (spells: Spell[]) => {
          this.spells = spells;
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
