import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  @ViewChild("vari", {static : true}) paragrafo : ElementRef ;
  
  constructor() {
    console.log(this.paragrafo);
  }

  ngAfterContentInit(){
    console.log(this.paragrafo);
  }

  ngOnInit() {
  }

  alterarTexto(){
    this.paragrafo.nativeElement.innerText = 'BRQ';
    this.paragrafo.nativeElement.style.backgroundColor = 'red';
  }

}
