import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-detalhes',
  templateUrl: './professor-detalhes.component.html',
  styleUrls: ['./professor-detalhes.component.css']
})
export class ProfessorDetalhesComponent implements OnInit {

  @Input("profFilho") todosOsProfessores = [];
  @Output("idadeEmitida") emiteIdade = new EventEmitter();
  idade : number = 0;
  idProfessor : number;

  constructor(private ar : ActivatedRoute,
      private professorService : ProfessorService
    ) {
    console.log(this.ar);
    
    

    this.ar.params.subscribe( ( dados ) => {
      console.log(dados);
      this.idProfessor = dados['id'];

      console.log( this.isStringNumber(this.idProfessor) );
    }  
    );
  }

  private isStringNumber(str){
    var parsed = parseFloat(str);
    var casted = +str;
    return parsed === casted && !isNaN(parsed) && !isNaN(casted);
  }

  addIdade(){
    this.idade++;
    this.emiteIdade.emit( { "id": 1, "idade": this.idade} );
  }

  removeIdade(){
    this.idade--;
    this.emiteIdade.emit( { "id": 1, "idade": this.idade} );
  }

  getOne() {
    this.professorService.getOneProfessor(this.idProfessor).subscribe( (dado ) => 
    {
      console.log(dado);
      this.todosOsProfessores.push(dado);
    }

    );
  }

  ngOnInit() {
    this.getOne();
  }

}
