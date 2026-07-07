import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MonstersComponent } from './monsters/monsters.component';
import { SpellsComponent } from './spells/spells.component';
import { WeaknessesComponent } from './weaknesses/weaknesses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonstersComponent,
    SpellsComponent,
    WeaknessesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
