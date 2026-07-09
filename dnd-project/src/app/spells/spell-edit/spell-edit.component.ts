import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SpellService } from '../spell.service';
import { Spell } from '../spells.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-spell-edit',
  standalone: false,
  templateUrl: './spell-edit.component.html',
  styleUrl: './spell-edit.component.css',
})
export class SpellEditComponent implements OnInit {
  groupSpells: Spell[] = [];
  originalSpell: Spell;
  spell: Spell;
  editMode: boolean = false;
  id: string;

  constructor(private spellService: SpellService,
    private router: Router,
    private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        const id = params['id'];

        if (!id) {
          this.editMode = false;
          return;
        }
        
        this.originalSpell = this.spellService.getSpell(id)

        if (!this.originalSpell) {
          return;
        }

        this.editMode = true;
        this.spell = JSON.parse(JSON.stringify(this.originalSpell))
    }) 
  }

  onSubmit(form: NgForm) {
    const value = form.value
        const newSpell = new Spell(
          value.id, 
          value.name, 
          value.image, 
          value.damageType, 
          value.level,
          value.school,
          value.description
        );
    
        if (this.editMode) {
          this.spellService.updateSpell(this.originalSpell, newSpell)
        } else {
          this.spellService.addSpell(newSpell)
        }
         
        this.router.navigate(['/spells']);
  }

  onCancel() {
    this.router.navigate(['/spells']);
  }
}
