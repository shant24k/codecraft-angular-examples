import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from "rxjs/operators";


@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  promise: Promise<{}>;
  observable$: Observable<number>;
  subscription = null;
  observableData: number;

  constructor() {
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subscribeObservable();
  }

  ngOnInit() {

  }

  getObservable() {
    return interval(1000).pipe(
      take(10),
      map(v => v * v)
    );
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(
      v => (this.observableData = v)
    );
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
