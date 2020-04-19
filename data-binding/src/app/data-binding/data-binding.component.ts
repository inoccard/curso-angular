import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    url: string = 'github.com/inoccard';
  urlImage = 'assets/img/coreLogo.png';
  constructor() { 
  }

  getValor() {
    return 1;
  }
  ngOnInit(): void {
  }

}
