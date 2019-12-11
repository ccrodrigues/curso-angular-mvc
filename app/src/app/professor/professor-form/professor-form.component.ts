import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessorService } from '../professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorModel } from 'src/app/shared/models/professor.model';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  meuForm: FormGroup;
  idRota;
  isEdicao = false;
  professorDaAPI;
  professor = new ProfessorModel();

  // ActivatedRoute precisa para dar a rota
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private professorService: ProfessorService,
    private router : Router) { }

  ngOnInit() {
    // criando o formulário
    this.meuForm = this.formBuilder.group({
        professor : this.formBuilder.group({
          idprofessor: ['', [Validators.required]],
          nome: ['', [Validators.required]]
        })
      });

    this.activatedRoute.params.subscribe((data) => // indica qual a rota certa
      this.idRota = data.id);
    console.log('ID da Rota: ' + this.idRota);

    // edição prof x criação prof
    if (this.idRota) {
      console.log('Edição');
      this.isEdicao = true;

      this.professorService.getOneProfessor(this.idRota).subscribe(
        (professorDaAPI) => {
          this.meuForm.patchValue( // só funciona no data driven - template driven só ngModel
            {
              professor : {
                idprofessor: professorDaAPI['idprofessor'],
                nome: professorDaAPI['nome']
              }
            })
        })
    }
    else {
      console.log('Criação');
      this.isEdicao = false;
    }
  }

  isErrorCampo(nomeCampo){
    return  ( !this.getCampo(nomeCampo).valid && this.getCampo(nomeCampo).touched );
  }

  getCampo(nomeCampo){
    return this.meuForm.get(nomeCampo);
  }

  sub() {
    console.log(this.meuForm);

    if (this.isEdicao == false){
      // let prof = {
      //   idprofessor: null,
      //   nome: this.meuForm.value.nome
      // }
      this.professorService.addProfessor(this.meuForm.value.professor).subscribe(
        (resposta) => {
          console.log(resposta);
          this.router.navigate(['/professores']);
        }
      );
    }

    else{
      // let prof = {
      //   idprofessor: this.meuForm.value.idprofessor,
      //   nome: this.meuForm.value.nome
      // }

      this.professorService.updateProfessor(this.idRota, this.meuForm.value.professor).subscribe(
        (resposta) => {
          console.log(resposta);
          this.router.navigate(['professores']);
        }
      );
    }
  }
}