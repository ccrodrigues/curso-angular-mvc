import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugCampoComponent } from './forms/debug-campo/debug-campo.component';
import { DebugFormComponent } from './forms/debug-form/debug-form.component';
import { MsgErroComponent } from './forms/msg-erro/msg-erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DebugCampoComponent,
    DebugFormComponent,
    MsgErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DebugCampoComponent,
    DebugFormComponent,
    MsgErroComponent
  ]
})
export class SharedModule { }
