import { Component, ChangeDetectorRef } from '@angular/core';
import { Monster } from '../../monsters/monsters.model';
import { MonsterService } from '../../monsters/monster.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Spell } from '../../spells/spells.model';
import { Subscription } from 'rxjs';
import { SpellService } from '../../spells/spell.service';

@Component({
  selector: 'app-weakness-detail',
  standalone: false,
  templateUrl: './weakness-detail.component.html',
  styleUrl: './weakness-detail.component.css',
})
export class WeaknessDetailComponent {
  monster: Monster
  spell: Spell
  private subscription: Subscription;
  spells: Spell[] = [];
  allSpells: Spell[] = [];
  term: string;

  constructor(public spellService: SpellService,
    private cd: ChangeDetectorRef, 
    private monsterService: MonsterService,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        const id = params['id'];
        this.monster = this.monsterService.getMonster(id);

        this.filterSpells()
      }
    );

    this.subscription = this.spellService.spellListChangedEvent
      .subscribe(
        (spellsList: Spell[]) => {
          console.log("Spells received:", spellsList);
          
          this.allSpells = spellsList;

          this.filterSpells();
      
        }
      );

    this.spellService.getSpells();
  }

  filterSpells() {

    if (!this.monster || !this.allSpells.length) {
      return;
    }

    console.log(
      "Monster vulnerabilities:",
      this.monster.vulnerabilities
    );

    this.spells = this.allSpells.filter(spell =>
      this.monster.vulnerabilities.includes(spell.damageType)
    );

    console.log("Matching spells:", this.spells);

    this.cd.detectChanges();
  }
}
