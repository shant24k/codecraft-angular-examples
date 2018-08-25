import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SearchService } from './search.service'

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent ],
  providers: [SearchService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
