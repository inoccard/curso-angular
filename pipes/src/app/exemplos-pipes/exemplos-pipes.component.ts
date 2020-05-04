import { Component, OnInit, Pipe } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book: any = {
    title: "Learning Angular 2.X",
    rating: 4.54321,
    pageNumber: 314,
    price: 40.415,
    date: new Date(2017, 6, 26),
    url: 'https://ler.amazon.com.br/kp/embed?asin=B07H4WYN5M&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_VjiPEb7J4Z6HT'
  }

  /**
   * Promessa
   * 1º opção de fazer pipes assyncrono 
   */
  valorAsync = new Promise((resolve) => {
    setTimeout(() => resolve('valor assíncrono'), 2000);
  });

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
