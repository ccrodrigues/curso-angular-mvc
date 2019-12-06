import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsExemploRoutingModule } from './forms-exemplo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { HttpClientModule } from '@angular/common/http';
import { MsgErroComponent } from './msg-erro/msg-erro.component';
import { DebugCampoComponent } from './debug-campo/debug-campo.component';
import { DebugFormComponent } from './debug-form/debug-form.component';


@NgModule({
  declarations: [TemplateDrivenComponent, DataDrivenComponent, MsgErroComponent, DebugCampoComponent, DebugFormComponent],
  imports: [
    CommonModule,
    FormsExemploRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class FormsExemploModule { }
