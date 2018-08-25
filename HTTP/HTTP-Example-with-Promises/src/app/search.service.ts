import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SearchItem } from './search-item'


@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
          .toPromise()
          .then(
              res => { // Success
                let result: any = res;
                this.results = result.results.map(item => {
                  return new SearchItem(
                      item.trackName,
                      item.artistName,
                      item.trackViewUrl,
                      item.artworkUrl30,
                      item.artistId
                  );
                });
                // this.results = res.json().results;
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
    return promise;
  }
}