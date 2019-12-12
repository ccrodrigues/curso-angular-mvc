import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../guards/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin : FormGroup;

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group( 
    { 
      usuario : ['', [Validators.required] ],
      senha : ['', [Validators.required] ]
    }
    );
  }

  onSubmit(){
    console.log(this.formLogin);
    
    this.authService
      .fazerLogin(this.formLogin.value.usuario, this.formLogin.value.senha)
  }

}
