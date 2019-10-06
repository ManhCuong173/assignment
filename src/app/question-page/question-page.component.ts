import { Component, OnInit } from '@angular/core';
import { ListQuestionService } from './../service/list-question.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  questions:any [];
  questionsArrLength: Number;
  arrayNumber = [];
  currentPage = 1;
  checkedAnswer : any;
  score :number = 0;
  url = null;
  timeStarted:number = 5;
  clockStart:any;
  constructor(private _listQuestion: ListQuestionService, private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
    this.url = this.url.split('/')[3];
    this._listQuestion.getJSON(this.url).subscribe(data => {
     this.questions = data;
     this.questionsArrLength = this.questions.length;
    })
    this.clock();
  }

  prevBtn(){
    if(this.currentPage == 1) return
    else this.currentPage -= 1;
  }

  nextBtn() {
    if(this.currentPage == 10) {
      // this.arrayNumber.forEach(element => {
      //   if(element.checkedAnswer == element.correctAnswer) this.score += 1;
      // });
    } else this.currentPage += 1
  }

  sendCorrectAnswer(correctAnswer, checkedAnswer, Id, numberForOptimize){
    numberForOptimize = +numberForOptimize;
    // if(numberForOptimize == 1){
    //   this.arrayNumber.forEach(element => {
    //     if(element.Id == Id) {
    //       element.checkedAnswer = checkedAnswer;
    //       element.correctAnswer = correctAnswer;
    //       numberForOptimize += 1;
    //     }
    //   });
    // } else {
    //   this.arrayNumber.forEach(element => {
    //     if(element.Id == Id) element.checkedAnswer = checkedAnswer;
    // });   
    // }
  };

  clock(){
    this.clockStart = setInterval(() => {
      if(this.timeStarted == 0) {
        clearInterval(this.clockStart);
        this.router.navigate(['/user/result']);
      }
      else this.timeStarted = this.timeStarted - 1;
    }, 1000);
  }
}
