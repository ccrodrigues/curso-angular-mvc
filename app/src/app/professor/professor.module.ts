import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfessorComponent } from './professor.component';
import { ProfessorDetalhesComponent } from './professor-detalhes/professor-detalhes.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

@NgModule({
  declarations: [ProfessorComponent, ProfessorDetalhesComponent, ProfessorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfessorRoutingModule
  ],
  exports : [
    ProfessorComponent
  ]
})
export class ProfessorModule { }
