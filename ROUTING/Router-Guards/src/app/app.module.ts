import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistComponent } from './artist/artist.component';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HttpClient
} from "@angular/common/http";
import {
  Routes,
  RouterModule,
  Router,
  ActivatedRoute,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { SearchService } from './search.service';
import { UserService } from './user.service';
import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';
import { AlwaysAuthGuard } from './always-auth.guard';
import { AlwaysAuthChildrenGuard } from './always-auth-children.guard';
import { UnsearchedTermGuard } from './unsearched-term.guard';


// Routes
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  {
    path: "search",
    component: SearchComponent,
    canDeactivate: [UnsearchedTermGuard]
  },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent }
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
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [
    SearchService,
    UserService,
    OnlyLoggedInUsersGuard,
    AlwaysAuthGuard,
    AlwaysAuthChildrenGuard,
    UnsearchedTermGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
