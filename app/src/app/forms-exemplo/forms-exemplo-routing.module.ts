import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { TextoComponent } from './texto/texto.component';


const routes: Routes = [
{ path : 'template-driven', component : TemplateDrivenComponent },
{ path : 'data-driven', component : DataDrivenComponent },
{ path : 'ciclo', component : CicloComponent },
{ path : 'texto', component : TextoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsExemploRoutingModule { }
