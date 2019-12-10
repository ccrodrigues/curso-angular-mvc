import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  meuForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.meuForm = this.formBuilder.group( 
    { 
      email : ['', [Validators.required, Validators.max(3)] ],
      senha : ['', [Validators.required] ]
    }
    );
  }

  onSubmit(){
    console.log(this.meuForm);
  }

  isErrorCampo(campo){
    return (campo.valid == false && campo.touched == true);
  }
}
