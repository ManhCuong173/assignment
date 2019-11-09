import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultAndScoreService {
  resultArray = [];
  isDone: number = 0;
  isCorrected: number = 0;
  score: number = 0;
  questionsNumber : number = 0;
  date: Date;
  constructor() { }

  addToResultArray() {
    this.resultArray.push({
      
    })
  }
}
