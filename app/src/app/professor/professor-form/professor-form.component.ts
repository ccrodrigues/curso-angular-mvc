import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessorService } from '../professor.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  prof;
  varForm;
  variavel;

  // ActivatedRoute precisa para dar a rota
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private professorService: ProfessorService,
    private router : Router) { }

  ngOnInit() {
    // criando o formulário
    this.meuForm = this.formBuilder.group(
      {
        idprofessor: ['1', [Validators.required, Validators.max(3)]],
        nome: ['Prof ', [Validators.required]]
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
              idprofessor: professorDaAPI['idprofessor'],
              nome: professorDaAPI['nome']
            })
        })
    }
    else {
      console.log('Criação');
      this.isEdicao = false;
    }
  }

  getCampo(nomeCampo){
    return this.meuForm.get(nomeCampo);
  }

  isErrorCampo(nomeCampo){
    return  ( !this.meuForm.get(nomeCampo).valid && this.meuForm.get(nomeCampo).touched );
  }

  sub() {
    console.log(this.meuForm);

    if (this.isEdicao == false){
      let prof = {
        idprofessor: null,
        nome: this.meuForm.value.nome
      }


      this.professorService.addProfessor(prof).subscribe(
        (resposta) => {
          console.log(resposta);
          this.router.navigate(['professores']);
        }
      );
    }

    else{
      let prof = {
        idprofessor: this.meuForm.value.idprofessor,
        nome: this.meuForm.value.nome
      }

      this.professorService.updateProfessor(this.idRota, prof).subscribe(
        (resposta) => {
          console.log(resposta);
          this.router.navigate(['professores']);
        }
      );
    }
  }
}