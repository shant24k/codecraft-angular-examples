import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn(): boolean {
    return false; // Switch to `false` to make OnlyLoggedInUsersGuard work (Toggle & see, how it works)
  }

}
