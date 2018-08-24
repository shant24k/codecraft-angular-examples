import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { SearchItem } from './search-item'
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { SearchService } from './search.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'HTTP Example with Observables';
  loading: boolean = false;
  results: Observable<SearchItem[]>;
  searchField: FormControl;

  constructor(private itunes: SearchService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.search(term)),
      tap(_ => (this.loading = false))
    );
  }

  doSearch(term: string) {
    this.itunes.search(term);
  }
}
