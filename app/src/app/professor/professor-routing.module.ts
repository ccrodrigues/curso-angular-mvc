import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor.component';
import { ProfessorDetalhesComponent } from './professor-detalhes/professor-detalhes.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';


const routes: Routes = [
  { path : '', component: ProfessorComponent  },
  { path : 'novo', component: ProfessorFormComponent  },
  { path : ':id' , component:  ProfessorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
