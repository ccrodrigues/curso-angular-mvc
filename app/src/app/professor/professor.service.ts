import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';
import { ProfessorModel } from '../shared/models/professor.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professores;

  constructor(private http: HttpClient,
    private envService: EnvService
  ) { }

  getALL() {
    console.log(this.envService.urlAPI);
    this.professores = this.http.get<ProfessorModel[]>(this.envService.urlAPI+'professores/')
    // this.professores = this.http.get(this.envService.urlAPI + 'professores');
    return this.professores;
  }

  getOneProfessor(id) {
    // return this.professores = this.http.get('http://localhost:8080/professores/' + id);
    this.professores = this.http.get<ProfessorModel>(this.envService.urlAPI + `professores/${id}`);
    return this.professores;
  }

  addProfessor(professor) {
    return this.http.post<ProfessorModel>(`${this.envService.urlAPI}professores/`, professor);
  }

  updateProfessor(idProfessor, professor){
    return this.http.patch<ProfessorModel>(`${this.envService.urlAPI}professores/${idProfessor}`, professor);
  }

  deleteProfessor(idProfessor){
    return this.http.delete<ProfessorModel>(`${this.envService.urlAPI}professores/${idProfessor}`);
  }

}
