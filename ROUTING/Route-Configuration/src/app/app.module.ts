import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistMusicVideoListComponent } from './artist-music-video-list/artist-music-video-list.component';
import { ArtistComponent } from './artist/artist.component';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import {
  HttpClientJsonpModule,
  HttpClientModule
} from "@angular/common/http";
import { SearchService } from './search.service';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "find", redirectTo: "search" },
  { path: "search", component: SearchComponent },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent },
      { path: "videos", component: ArtistMusicVideoListComponent }
    ]
  },
  { path: "**", component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    ArtistAlbumListComponent,
    ArtistTrackListComponent,
    ArtistMusicVideoListComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
