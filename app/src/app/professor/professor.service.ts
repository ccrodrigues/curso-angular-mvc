import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

professores;

  constructor(private http: HttpClient) {
    this.professores = this.http.get('http://localhost:8080/professores');
  }

  getALL(){
    return this.professores;
  }

}
