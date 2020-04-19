import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';


/* módulo de funcionalidade não importa o BrowserModule
Somente o módulo raiz*/
@NgModule({
  declarations: [CursosComponent, DetailCourseComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ],
  // Seriços fornecedores
  providers:[
    CursosService
  ]
})
export class CursosModule { }
