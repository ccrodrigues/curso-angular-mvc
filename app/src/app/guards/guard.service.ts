import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private authService : AuthService,
              private router : Router) { }

  canActivate(){

    let isAuth = this.authService.getIsAutenticado();

    if (isAuth == false){
      this.router.navigate(['login']);
    }
    return isAuth;

  }
}
