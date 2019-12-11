import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExemploRoutingModule } from './forms-exemplo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CicloComponent } from './ciclo/ciclo.component';
import { TextoComponent } from './texto/texto.component';

@NgModule({
  declarations: [TemplateDrivenComponent, DataDrivenComponent, CicloComponent, TextoComponent],
  imports: [
    CommonModule,
    FormsExemploRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class FormsExemploModule { }
