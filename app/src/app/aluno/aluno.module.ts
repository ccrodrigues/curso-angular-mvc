import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import { FormsModule } from '@angular/forms';
import { AlunoRoutingModule } from './aluno-routing.module';



@NgModule({
  declarations: [AlunoComponent],
  imports: [
    CommonModule,
    FormsModule,

    AlunoRoutingModule
  ],
  exports : [
    AlunoComponent
  ]
})
export class AlunoModule { }
