import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professores;

  constructor(private http: HttpClient,
    private envService: EnvService
  ) { }

  getALL() {
    this.professores = this.http.get(this.envService.urlAPI + 'professores');
    return this.professores;
  }

  getOneProfessor(id) {
    // return this.professores = this.http.get('http://localhost:8080/professores/' + id);
    this.professores = this.http.get(this.envService.urlAPI + `professores/${id}`);
    return this.professores;
  }

  addProfessor(professor) {
    return this.http.post(`${this.envService.urlAPI}professores/`, professor);
  }

  updateProfessor(idProfessor, professor){
    return this.http.patch(`${this.envService.urlAPI}professores/${idProfessor}`, professor);
  }

  deleteProfessor(idProfessor){
    return this.http.delete(`${this.envService.urlAPI}professores/${idProfessor}`);
  }

}
