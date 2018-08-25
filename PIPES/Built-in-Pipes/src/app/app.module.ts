import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeBuiltinsComponent } from './pipe-builtins/pipe-builtins.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeBuiltinsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
