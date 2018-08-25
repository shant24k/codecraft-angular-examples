import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveModelFormComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
