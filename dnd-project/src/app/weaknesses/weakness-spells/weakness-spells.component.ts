import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '../../spells/spells.model';

@Component({
  selector: 'app-weakness-spells',
  standalone: false,
  templateUrl: './weakness-spells.component.html',
  styleUrl: './weakness-spells.component.css',
})
export class WeaknessSpellsComponent implements OnInit {
  @Input() spell: Spell;

  constructor() {}

  ngOnInit() {
  
  }

}
