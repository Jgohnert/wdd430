import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MonsterService } from '../monster.service';
import { Monster } from '../monsters.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-monster-edit',
  standalone: false,
  templateUrl: './monster-edit.component.html',
  styleUrl: './monster-edit.component.css',
})
export class MonsterEditComponent implements OnInit{
  originalMonster: Monster;
  // monster: Monster;
  editMode: boolean = false;
  id: string;

  constructor(private monsterService: MonsterService,
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
        
        this.originalMonster = this.monsterService.getMonster(id)

        if (!this.originalMonster) {
          return;
        }

        this.editMode = true;
        this.monster = JSON.parse(JSON.stringify(this.originalMonster))
    }) 
  }

  monster: Monster = new Monster(
    '',
    '',
    'https://loremflickr.com/575/600/',
    '',
    '',
    '',
    [],
    []
  );

  onSubmit(form: NgForm) {
    const value = form.value

    const toArray = (value: string | string[]) =>
      Array.isArray(value)
        ? value
        : value.split(',').map(v => v.trim());

    const vulnerabilities = toArray(value.vulnerabilities);
    const immunity = toArray(value.immunity);
        
    const newMonster = new Monster(
      value.id, 
      value.name, 
      value.image || 'https://loremflickr.com/575/600/',
      value.type, 
      value.hp,
      value.armor,
      vulnerabilities,
      immunity
    );

    if (this.editMode) {
      this.monsterService.updateMonster(this.originalMonster, newMonster)
    } else {
      this.monsterService.addMonster(newMonster)
    }
     
    this.router.navigate(['/monsters']);
  }

  onCancel() {
    this.router.navigate(['/monsters']);
  }
}
