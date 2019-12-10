import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfessorComponent } from './professor.component';
import { ProfessorDetalhesComponent } from './professor-detalhes/professor-detalhes.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { MsgErroComponent } from '../shared/forms/msg-erro/msg-erro.component';
import { DebugFormComponent } from '../shared/forms/debug-form/debug-form.component';
import { DebugCampoComponent } from '../shared/forms/debug-campo/debug-campo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfessorComponent, ProfessorDetalhesComponent, ProfessorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfessorRoutingModule,
    SharedModule
  ],
  exports : [
    ProfessorComponent
  ]
})
export class ProfessorModule { }
