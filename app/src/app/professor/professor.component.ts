import { Component, OnInit } from '@angular/core';
import { ProfessorService } from './professor.service';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup } from '@angular/forms';
import { ProfessorModel } from '../shared/models/professor.model';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professores : ProfessorModel[] = [];

  nomeProfessor: any = "Fabrizio";
  url = "http://google.com";
  contador: number = 0;
  isMostrarMensagem: boolean = true;
  isMouseOver: boolean = false;
  vetorCaina: string[] = [];
  meuForm: FormGroup;

  constructor(private ps: ProfessorService) { }

  receberIdadeDoFilho(eventoDoFilho) {
    console.log(eventoDoFilho);
    console.log(eventoDoFilho.idade);
  }

  getBackgroundColor() {
    //isMouseOver == true ? 'yellow' : 'white'
    if (this.isMouseOver == true) {
      return 'yellow';
    }
    else {
      return 'white';
    }
  }

  OnMouseOver() {
    // console.log('onMouseOver');
    this.isMouseOver = true;
    // this.vetorCaina.push('Cainã');
  }

  OnMouseLeave() {
    // console.log('onMouseLeave');
    this.isMouseOver = false;
    // this.vetorCaina.push('Cainã');
  }

  addContador() {
    this.contador++;
  }

  removeContador() {
    this.contador--;
  }

  devoMostrarMensagem() {
    this.isMostrarMensagem = !this.isMostrarMensagem;
  }

  /* function (meudado) {
          console.log(meudado);
          this.professores = meudado; */

  ngOnInit() {
    this.ps.getALL().subscribe(
      (meudado) => {
        this.professores = meudado;
        console.log(this.professores);
      }
    );
    //arrow function
  }

  getNomeProfessor() {

    let numero = 10;
    return this.nomeProfessor;
  }

  mostrarMensagem(NomeNovoProfessor) {
    alert('O novo professor é o ' + NomeNovoProfessor);
  }

  mostrarMensagemBotao(valor) {
    alert(valor);
  }

  onNomeChange(digitado) {
    this.nomeProfessor = digitado;
  }

  del(idProfessor) {
    this.ps.deleteProfessor(idProfessor).subscribe(
      (resposta) => {

        this.professores
        .splice(
          this.professores.findIndex( p => p.idprofessor == idProfessor)
        , 1);
        
      }
    );
  }
}