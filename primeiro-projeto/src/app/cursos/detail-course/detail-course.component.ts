import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent {
  url: string;
  constructor() { 
    this.url = "<a>github.com/inoccard</a>"   
  }
}
