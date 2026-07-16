import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from './spells/spells.component';
import { MonstersComponent } from './monsters/monsters.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';
import { SpellEditComponent } from './spells/spell-edit/spell-edit.component';
import { MonsterDetailComponent } from './monsters/monster-detail/monster-detail.component';
import { MonsterEditComponent } from './monsters/monster-edit/monster-edit.component';
import { WeaknessDetailComponent } from './weaknesses/weakness-detail/weakness-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/weaknesses', pathMatch: 'full' },
  { path: 'weaknesses', component: WeaknessesComponent, children: [
    { path: ':id', component: WeaknessDetailComponent }
  ]},
  { path: 'spells', component: SpellsComponent, children: [
    { path: 'new', component: SpellEditComponent },
    { path: ':id/edit', component: SpellEditComponent },
    { path: ':id', component: SpellDetailComponent }
  ]},
  { path: 'monsters', component: MonstersComponent, children: [
    { path: 'new', component: MonsterEditComponent },
    { path: ':id/edit', component: MonsterEditComponent },
    { path: ':id', component: MonsterDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }