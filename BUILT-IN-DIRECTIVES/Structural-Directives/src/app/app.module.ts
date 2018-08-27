import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { CodeCraftIfDirective } from './code-craft-if.directive';
import { CodeCraftForOfDirective } from './code-craft-for-of.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    CodeCraftIfDirective,
    CodeCraftForOfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
