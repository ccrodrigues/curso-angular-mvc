import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  
alunos;

  constructor(private http: HttpClient) { }

  getALL(){
    this.alunos = this.http.get('http://localhost:8080/alunos');
    return this.alunos;
  }

  getOneAluno(id){
    // return this.professores = this.http.get('http://localhost:8080/alunos/' + id);
    this.alunos = this.http.get(`http://localhost:8080/alunos/${id}`);
    return this.alunos;
  }


}
