import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsExemploService {

  constructor(private http: HttpClient) { }

  doPost(){
    return this.http.post('http://localhost:8080/professores', { idprofessor : 3, nome: "Prof 3" });
  }
}
