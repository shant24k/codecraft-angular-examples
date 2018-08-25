import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule
} from "@angular/forms";

import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
