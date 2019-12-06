import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';


const routes: Routes = [
  { path : 'professores', loadChildren: './professor/professor.module#ProfessorModule' },
  { path : 'alunos' , loadChildren: './aluno/aluno.module#AlunoModule' },
  { path : 'forms' , loadChildren: './forms-exemplo/forms-exemplo.module#FormsExemploModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
