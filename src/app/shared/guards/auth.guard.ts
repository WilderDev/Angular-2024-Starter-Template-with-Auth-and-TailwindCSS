import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from 'rxjs/operators';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}


  // Function that checks for authorized user. If there is a user continue; If not, return to login page
  canActivate(): Observable<boolean> {
    return this.authService.currentUser.pipe(
      take(1),
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/', 'login'])
          return false;
        }
      })
    )
  }
}
