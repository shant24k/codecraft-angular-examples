import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private loading: boolean = false;

  constructor(private itunes: SearchService) {}

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
  }

  ngOnInit() {
  }

}
