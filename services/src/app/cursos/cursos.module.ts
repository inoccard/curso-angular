import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
