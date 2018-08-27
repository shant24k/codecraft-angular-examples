import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, ContentChild } from '@angular/core';
import { Joke } from '../joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[] = [
    new Joke(
      "What did the cheese say when it looked in the mirror",
      "Hello-me (Halloumi)"
    ),
    new Joke(
      "What kind of cheese do you use to disguise a small horse",
      "Mask-a-pony (Mascarpone)"
    )
  ];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
    console.log(this.jokeViewChild);
    console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
    console.log(this.jokeContentChild);
  }

  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`
    );
    console.log(this.jokeContentChild);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    console.log(this.jokeViewChild);

    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    console.log(this.headerEl);
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

  ngOnInit() {
  }

}
