import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos = [];

  constructor(private as : AlunoService) { }

  ngOnInit() {
    this.as.getALL().subscribe(
      (meudado) => {
        this.alunos = meudado;
        console.log(this.alunos);
      }
    );
  }
}