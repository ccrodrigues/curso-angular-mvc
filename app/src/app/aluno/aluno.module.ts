import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';



@NgModule({
  declarations: [AlunoComponent],
  imports: [
    CommonModule
  ],
  exports : [
    AlunoComponent
  ]
})
export class AlunoModule { }
