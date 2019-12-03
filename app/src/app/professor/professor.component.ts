import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  nomeProfessor : any = "Fabrizio";

  url = "http://google.com";

  constructor() {  }

  ngOnInit() {
  }

  getNomeProfessor ()  {

    let numero = 10;
    return this.nomeProfessor;
  }

  mostrarMensagem(NomeNovoProfessor){
    alert('O novo professor é o ' + NomeNovoProfessor);
  }

  mostrarMensagemBotao(valor) {
    alert(valor);
  }

  onNomeChange(digitado){
    this.nomeProfessor=digitado;
  }

}
