import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsearchedTermGuard implements CanDeactivate<SearchComponent> {

  canDeactivate(
    component: SearchComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("UnsearchedTermGuard");
    console.log(state.url);
    return component.canDeactivate() || window.confirm("Are you sure?");
  }
}
