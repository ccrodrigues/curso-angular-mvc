import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  isAutenticado = false;

  fazerLogin(email : string, senha : string){
    
    if (email == 'a' && senha == 'a'){
      // login aprovado
      this.isAutenticado = true;
      this.router.navigate(['home']);
    }
    else{
      //redirecionar para o Login
      this.isAutenticado = false;
      this.router.navigate(['login']);
    }
  }

  getIsAutenticado(){
    return this.isAutenticado;
  }

  doLogout(){
    return this.isAutenticado = false;
    this.router.navigate(['login']);
  }
}
