import { Component } from '@angular/core';
import { SearchItem } from './search-item'
import { SearchService } from './search.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'HTTP Example with Promises';
  loading: boolean = false;

  constructor(private itunes: SearchService) {}

  ngOnInit() { }

  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then( () => {
      this.loading = false;
    });
  }
}
