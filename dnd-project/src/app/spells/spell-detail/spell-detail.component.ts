import { Component } from '@angular/core';
import { Spell } from '../spells.model';
import { SpellService } from '../spell.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-spell-detail',
  standalone: false,
  templateUrl: './spell-detail.component.html',
  styleUrl: './spell-detail.component.css',
})
export class SpellDetailComponent {
  spell: Spell

  constructor(private spellService: SpellService,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        const id = params['id'];
        this.spell = this.spellService.getSpell(id);
      }
    );
  }

  onDelete() {
    this.spellService.deleteSpell(this.spell);
    this.router.navigateByUrl('/spells');
  }
}
