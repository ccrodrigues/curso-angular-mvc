import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfessorComponent } from './professor.component';

@NgModule({
  declarations: [ProfessorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ProfessorComponent
  ]
})
export class ProfessorModule { }
