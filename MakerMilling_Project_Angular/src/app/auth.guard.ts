import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {environment} from "../environments/environments";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (environment.userIsAuthenticated == true) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
