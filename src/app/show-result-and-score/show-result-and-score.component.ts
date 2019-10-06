import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-result-and-score',
  templateUrl: './show-result-and-score.component.html',
  styleUrls: ['./show-result-and-score.component.css']
})
export class ShowResultAndScoreComponent implements OnInit {
  createdDate: Date
  date: string
  constructor() { }

  ngOnInit() {
    this.createdDate = new Date();
    this.date = this.createdDate.getDate() + '/' + this.createdDate.getMonth() + '/' + this.createdDate.getFullYear()
  }


}
