import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugCampoComponent } from './forms/debug-campo/debug-campo.component';
import { DebugFormComponent } from './forms/debug-form/debug-form.component';
import { MsgErroComponent } from './forms/msg-erro/msg-erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { CpfPipe } from './pipes/cpf.pipe';



@NgModule({
  declarations: [
    DebugCampoComponent,
    DebugFormComponent,
    MsgErroComponent,
    FundoAmareloDirective,
    ReversePipe,
    CpfPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DebugCampoComponent,
    DebugFormComponent,
    MsgErroComponent,
    FundoAmareloDirective,
    ReversePipe,
    CpfPipe
  ]
})
export class SharedModule { }
