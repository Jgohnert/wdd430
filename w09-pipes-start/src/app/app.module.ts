import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe';
import { ReversePipe } from './reverse-pipe';
import { SortPipe } from './sort-pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe, ReversePipe, SortPipe],
  imports: [BrowserModule, AppRoutingModule, ShortenPipe, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent],
})
export class AppModule {}
