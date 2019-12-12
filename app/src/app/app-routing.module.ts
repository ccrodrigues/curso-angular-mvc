import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuardService } from './guards/guard.service';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component: HomeComponent},
  { path : 'login', component: LoginComponent},
  { path : 'professores', loadChildren: './professor/professor.module#ProfessorModule',
      canActivate:[ GuardService ] },
  { path : 'alunos' , loadChildren: './aluno/aluno.module#AlunoModule' },
  { path : 'forms' , loadChildren: './forms-exemplo/forms-exemplo.module#FormsExemploModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
