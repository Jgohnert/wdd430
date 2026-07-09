import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MonstersComponent } from './monsters/monsters.component';
import { SpellsComponent } from './spells/spells.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';
import { WeaknessesDetailComponent } from './weaknesses/weaknesses-detail/weaknesses-detail.component';
import { WeaknessesListComponent } from './weaknesses/weaknesses-list/weaknesses-list.component';
import { SpellListComponent } from './spells/spell-list/spell-list.component';
import { SpellItemComponent } from './spells/spell-item/spell-item.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';
import { SpellsFilterPipe } from './spells/spells-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpellEditComponent } from './spells/spell-edit/spell-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonstersComponent,
    SpellsComponent,
    WeaknessesComponent,
    WeaknessesDetailComponent,
    WeaknessesListComponent,
    SpellListComponent,
    SpellItemComponent,
    SpellDetailComponent,
    SpellsFilterPipe,
    SpellEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
