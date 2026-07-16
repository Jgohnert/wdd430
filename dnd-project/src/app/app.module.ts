import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellListComponent } from './spells/spell-list/spell-list.component';
import { SpellItemComponent } from './spells/spell-item/spell-item.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';
import { SpellEditComponent } from './spells/spell-edit/spell-edit.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterListComponent } from './monsters/monster-list/monster-list.component';
import { MonsterItemComponent } from './monsters/monster-item/monster-item.component';
import { MonsterDetailComponent } from './monsters/monster-detail/monster-detail.component';
import { MonsterEditComponent } from './monsters/monster-edit/monster-edit.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpellsFilterPipe } from './spells/spells-filter.pipe';
import { MonstersFilterPipe } from './monsters/monsters-filter.pipe';
import { WeaknessListComponent } from './weaknesses/weakness-list/weakness-list.component';
import { WeaknessItemComponent } from './weaknesses/weakness-item/weakness-item.component';
import { WeaknessDetailComponent } from './weaknesses/weakness-detail/weakness-detail.component';
import { WeaknessSpellsComponent } from './weaknesses/weakness-spells/weakness-spells.component';
import { DiceComponent } from './dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonstersComponent,
    SpellsComponent,
    WeaknessesComponent,
    SpellListComponent,
    SpellItemComponent,
    SpellDetailComponent,
    SpellsFilterPipe,
    SpellEditComponent,
    MonsterListComponent,
    MonsterItemComponent,
    MonstersFilterPipe,
    MonsterDetailComponent,
    MonsterEditComponent,
    WeaknessListComponent,
    WeaknessItemComponent,
    WeaknessDetailComponent,
    WeaknessSpellsComponent,
    DiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
