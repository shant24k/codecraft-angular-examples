import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, ContentChild } from '@angular/core';
import { Joke } from '../joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[] = [];

  addJoke() {
    this.jokes.unshift(
      new Joke(
        "What did the cheese say when it looked in the mirror",
        "Hello-me (Halloumi)"
      )
    );
  }

  deleteJoke() {
    this.jokes = [];
  }

  ngOnInit() {
  }

}
