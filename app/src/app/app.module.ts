import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlunoModule } from './aluno/aluno.module';
import { MenuComponent } from './menu/menu.component';

// import { ProfessorModule } from './professor/professor.module'
// import { ProfessorRoutingModule } from './professor/professor-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AlunoModule,
  //  ProfessorModule,
  //  ProfessorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
