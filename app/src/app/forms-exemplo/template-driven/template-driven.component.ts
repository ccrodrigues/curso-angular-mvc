import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  emailModel : string = 'seuemail@seuemail.com';
  passModel : string = 'suasenha';

  constructor() { }

  ngOnInit() {
  }

  isErrorCampo(campo){
    return (campo.valid == false && campo.touched == true);
  }
  // onSubmit(meuForm){
  //   this.formService.doPost().this.subscribe( (dados) => { console.log(dados) } );
  // }

}
