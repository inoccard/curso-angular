import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  ConsoleLog(msg: string) {
    console.log(msg);
  }
}
