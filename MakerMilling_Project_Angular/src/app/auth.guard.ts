import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from "../environments/environments";

@Injectable()
export class AuthGuard {
  //get router in constructor
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    //check if user is authenticated, else return to login page
    if (environment.userIsAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
