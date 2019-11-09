import { Component, OnInit } from '@angular/core';
import {ResultAndScoreService} from './../service/result-and-score.service'
import {CookieService} from 'ngx-cookie-service'
import {ListUserService} from './../service/list-user.service'
import {ActivatedRoute, Router} from '@angular/router'
import {RouterHelperService} from './../helpers/router-helper.service'

@Component({
  selector: 'app-show-result-and-score',
  templateUrl: './show-result-and-score.component.html',
  styleUrls: ['./show-result-and-score.component.css'],
  providers: [RouterHelperService]
})
export class ShowResultAndScoreComponent implements OnInit {
  createdDate: Date
  date: string
  score: number;
  isDone: number = 0;
  isCorrected: number = 0;
  questionsNumber: number = 0;
  constructor(private _resultAndScoreService: ResultAndScoreService, private _cookieSerVice: CookieService, private _listStudents: ListUserService, private activatedRoute: ActivatedRoute, private _routerDeactiveService: RouterHelperService, private router: Router) { }

  ngOnInit() {
    this.createdDate = this._resultAndScoreService.date;
    this.date = this.createdDate.getDate() + '/' + (+this.createdDate.getMonth() + 1) + '/' + this.createdDate.getFullYear();
    this.score = +(this._resultAndScoreService.score*10).toFixed(3);
    this.isDone = this._resultAndScoreService.isDone;
    this.isCorrected = this._resultAndScoreService.isCorrected;
    this.questionsNumber = this._resultAndScoreService.questionsNumber;
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }
  saveResult(userId) {
    let subjectId: any; 
    this.activatedRoute.queryParams.subscribe(param => subjectId = param.quizId);
    this._listStudents.saveResult(this._cookieSerVice.get('user-id'), subjectId, this.score);
  }

}
