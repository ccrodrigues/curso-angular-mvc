import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

professores;

  constructor(private http: HttpClient) { }

  getALL(){
    this.professores = this.http.get('http://localhost:8080/professores');
    return this.professores;
  }

  getOneProfessor(id){
   // return this.professores = this.http.get('http://localhost:8080/professores/' + id);
   this.professores = this.http.get(`http://localhost:8080/professores/${id}`);
   return this.professores;
  }

}
