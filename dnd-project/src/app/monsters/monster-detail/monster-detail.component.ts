import { Component } from '@angular/core';
import { Monster } from '../monsters.model';
import { MonsterService } from '../monster.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-monster-detail',
  standalone: false,
  templateUrl: './monster-detail.component.html',
  styleUrl: './monster-detail.component.css'
})
export class MonsterDetailComponent {
  monster: Monster

  constructor(private monsterService: MonsterService,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        const id = params['id'];
        this.monster = this.monsterService.getMonster(id);
      }
    );
  }

  onDelete() {
    this.monsterService.deleteMonster(this.monster);
    this.router.navigateByUrl('/monsters');
  }
}
