import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input("joke") data: Joke;

  constructor() {
    console.log(`new - data is ${this.data}`);
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.data}`);

    for (let key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
      console.log(changes[key].currentValue);
      console.log(changes[key].previousValue);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
    console.log(this.data);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
