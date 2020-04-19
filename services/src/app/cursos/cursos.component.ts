import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  CursosService: CursosService  
  constructor(CursosService: CursosService) { 
    this.CursosService = CursosService
  }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos()

    // inicializa o evento de emitido
    CursosService.cursoCriado.subscribe
      (
        curso => this.cursos.push(curso)
      );
  }

}
