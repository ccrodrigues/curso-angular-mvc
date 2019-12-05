import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { ProfessorDetalhesComponent } from './professor-detalhes/professor-detalhes.component';


const routes: Routes = [
  { path : '', component: ProfessorComponent  },
  { path : ':id' , component:  ProfessorDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
