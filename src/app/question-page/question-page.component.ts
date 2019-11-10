import { Component, OnInit } from '@angular/core';

import { ListQuestionService } from './../service/list-question.service'
import { ResultAndScoreService } from './../service/result-and-score.service'

import { Router, ActivatedRoute } from '@angular/router'
import {RouterHelperService} from './../helpers/router-helper.service'
@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  //Initail questions array
  questions: any =  [];
  questionsArrLength: number = 0;

  //Array for storing answers from user
  answersArray : any = [];
  IdEachQuestion: any;
  answer: any;

  //Array for controlling what question was done
  answeredArray : any = []

  //Pagination
  currentPage = 1;

  //Url of current page
  url = null;

  //Show result
  isDone: number = 0;
  isCorrected: number = 0;
  score: number = 0;

  //Clock
  timeStarted:number = 3600;
  clockStart:any;

  //User Id
  userId:any
  //Detect cancel do quiz
  constructor(private _listQuestion: ListQuestionService, private _resultAndScoreService: ResultAndScoreService, private router: Router, private activatedRoute: ActivatedRoute,  private _routerDeactiveService: RouterHelperService) { }


  //Current answer Id
  currentAnswer:any;

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(param => {
      this.url = param.quizId;
      this.userId = param.userId;
    })
    this._listQuestion.getJSON(this.url).subscribe(data => {
     this.questions = data;
     this.questionsArrLength +=this.questions.length;

     this.questions.forEach((element, index) => {
       this.answersArray.push({"name": element.Id, "correctAnswer": element.AnswerId, "answer": null});
       this.answeredArray.push({"index": ++index, "isDone" : false});
     });
    })
    this.clock();
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }

  ngOnDestroy() {
    this._routerDeactiveService.isDeactive = false;
  }
  prevBtn(){
    if(this.currentPage == 1) return
    else {
      this.answersArray.forEach((element, index) => {
        if(element.name == this.IdEachQuestion) {
          element.answer = this.answer;
          this.answeredArray[index].isDone = true;
        }
      });
      this.currentPage -= 1;
      this.answersArray[this.currentPage-1].answer ? this.currentAnswer = this.answersArray[this.currentPage-1].answer : null;
    }
  }; 

  nextBtn() {
    if(this.currentPage == this.questionsArrLength) {
      let showResult = confirm('Tác vụ này không thể hoàn tác!');

      if(showResult == true) {

        this.answersArray.forEach((element, index) => {
          if(element.answer == element.correctAnswer) {
            ++this.score;
            ++this.isCorrected;
          }
          if(this.answeredArray[index].isDone){
            ++this.isDone;
          }
        });
        this._resultAndScoreService.score = (this.score/+(this.answersArray.length));
        this._resultAndScoreService.isCorrected = this.isCorrected;
        this._resultAndScoreService.isDone = this.isDone;
        this._resultAndScoreService.questionsNumber = this.answersArray.length;
        this._resultAndScoreService.date = new Date();
        clearInterval(this.clockStart);
        this.router.navigate(['/user/result'], {queryParams: {userId: `${this.userId}`, 'quizId': `${this.url}`}});
      }
    } else {
      this.answersArray.forEach((element, index) => {
        if(element.name == this.IdEachQuestion) {
          element.answer = this.answer;
          this.answeredArray[index].isDone = true;
        }
      });

      this.currentPage += 1;

      this.answersArray[this.currentPage-1].answer ? this.currentAnswer = this.answersArray[this.currentPage-1].answer : null;
    }
  }
  submit(){
    let showResult = confirm('Tác vụ này không thể hoàn tác');

      if(showResult == true) {

        this.answersArray.forEach((element, index) => {
          if(element.answer == element.correctAnswer) {
            ++this.score;
            ++this.isCorrected;
          }
          if(this.answeredArray[index].isDone){
            ++this.isDone;
          }
        });
        this._resultAndScoreService.score = (this.score/+(this.answersArray.length));
        this._resultAndScoreService.isCorrected = this.isCorrected;
        this._resultAndScoreService.isDone = this.isDone;
        this._resultAndScoreService.questionsNumber = this.answersArray.length;
        this._resultAndScoreService.date = new Date();
        clearInterval(this.clockStart);
        this.router.navigate(['/user/result'], {queryParams: {userId: `${this.userId}`, 'quizId': `${this.url}`}});
    }
  }
  chooseAnswer(answer: string, IdEachQuestion: string){
    this.answer = answer;
    this.IdEachQuestion = IdEachQuestion;
  }


  /**
   * <!-- Generating clock for counting time to do the test -->
   */
  clock(){
    this.clockStart = setInterval(() => {
      if(window.location.href == 'http://localhost:4200/user/list') {
        this.timeStarted == 0;
        clearInterval(this.clockStart);
        return;
      }
      if(this.timeStarted == 0) {
        clearInterval(this.clockStart);
        this.answersArray.forEach((element, index) => {
          if(element.answer == element.correctAnswer) {
            ++this.score;
            ++this.isCorrected;
          }
          if(this.answeredArray[index].isDone){
            ++this.isDone;
          }
        });
        this._resultAndScoreService.score = (this.score/+(this.answersArray.length));
        this._resultAndScoreService.isCorrected = this.isCorrected;
        this._resultAndScoreService.isDone = this.isDone;
        this._resultAndScoreService.questionsNumber = this.answersArray.length;
        this._resultAndScoreService.date = new Date();
        alert('Bạn đã hết thời gian làm bài! Nhấn Ok để chuyển tiếp đến trang chủ')
        this.router.navigate(['/user/result'], {queryParams: {userId: `${this.userId}`, 'quizId': `${this.url}`}});
      }
      else this.timeStarted = this.timeStarted - 1;
    }, 1000);
  }

  backToHomePage() {
    let isBack = window.confirm('Bài thi của bạn sẽ bị hủy bỏ và điểm số không được tính');

    if(isBack) {
      this.router.navigate(['/user/list'])
     } else return;
  }
}