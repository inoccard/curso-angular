import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  /**emitir eventos para que a plicação escute e faça alguma coisa*/
  emitirCursoCriado = new EventEmitter<string>()
  static cursoCriado = new EventEmitter<string>();

  cursos: string[] =  ['Angular', 'C Sharp', 'Java', 'API Restful']
  constructor(private LogService: LogService) {
    console.log('CursosService')
  }

  getCursos() {
    this.LogService.ConsoleLog(`Obtendo lista de cursos`)
    return this.cursos
  }

  addCurso(curso: string) {
    this.LogService.ConsoleLog(`Criando um novo curso ${curso}`)
    this.cursos.push(curso)
    // emitir uma informação
    this.emitirCursoCriado.emit(curso)
    CursosService.cursoCriado.emit(curso)
  }
}
