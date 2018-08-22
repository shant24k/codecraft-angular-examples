import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SearchItem } from './search-item'

@Injectable()
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";

  constructor(private http: HttpClient) {}

  search(term: string) {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp(apiURL, "callback").pipe(
      map(res => {
        let response: any = res;  
        return response.results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
}