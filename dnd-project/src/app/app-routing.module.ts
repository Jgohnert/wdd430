import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from './spells/spells.component';
import { MonstersComponent } from './monsters/monsters.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';
import { WeaknessesDetailComponent } from './weaknesses/weaknesses-detail/weaknesses-detail.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';
import { SpellEditComponent } from './spells/spell-edit/spell-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/weaknesses', pathMatch: 'full' },
  { path: 'weaknesses', component: WeaknessesComponent, children: [
    { path: ':id', component: WeaknessesDetailComponent }
  ]},
  { path: 'spells', component: SpellsComponent, children: [
    { path: 'new', component: SpellEditComponent },
    { path: ':id', component: SpellDetailComponent }
  ]},
  { path: 'monsters', component: MonstersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }