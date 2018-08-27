import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
