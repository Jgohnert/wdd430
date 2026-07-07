import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellsComponent } from './spells/spells.component';
import { MonstersComponent } from './monsters/monsters.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';

const routes: Routes = [
  { path: '', redirectTo: '/weaknesses', pathMatch: 'full' },
  { path: 'weaknesses', component: WeaknessesComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'monsters', component: MonstersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
