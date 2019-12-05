import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AlunoModule,
    ProfessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
