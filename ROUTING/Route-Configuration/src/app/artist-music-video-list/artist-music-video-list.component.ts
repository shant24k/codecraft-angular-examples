import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-artist-music-video-list',
  templateUrl: './artist-music-video-list.component.html',
  styleUrls: ['./artist-music-video-list.component.css']
})
export class ArtistMusicVideoListComponent implements OnInit {

  private videos: any[];
  showLoader: boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.showLoader = true;
      this.http
        .jsonp(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=musicVideo`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          let result: any = res;
          this.videos = result.results.slice(1);
          this.showLoader = false;
        });
    });
  }

  ngOnInit() {
  }

}
