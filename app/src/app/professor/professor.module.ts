import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfessorComponent } from './professor.component';
import { ProfessorDetalhesComponent } from './professor-detalhes/professor-detalhes.component';
import { ProfessorRoutingModule } from './professor-routing.module';

@NgModule({
  declarations: [ProfessorComponent, ProfessorDetalhesComponent],
  imports: [
    CommonModule,
    FormsModule,

    ProfessorRoutingModule
  ],
  exports : [
    ProfessorComponent
  ]
})
export class ProfessorModule { }
