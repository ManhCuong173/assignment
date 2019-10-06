import { Component, OnInit } from '@angular/core';
import { ListSubjectService } from './../service/list-subject.service'
import { ListQuestionService } from './../service/list-question.service'

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css'],
  providers: [ListSubjectService, ListQuestionService]
})
export class ListSubjectsComponent implements OnInit {
  isShow = false;
  itemPerPage = 6;
  curPage = 1;
  itemPages = [];
  itemStart = 1;
  itemEnd = 3;
  constructor(private _listSubject: ListSubjectService, private _listQuestion: ListQuestionService) { }
  
  listSubjectComponent = this._listSubject.listSubjects;
  totalPages = Math.ceil(this.listSubjectComponent.length / this.itemPerPage);

  ngOnInit() {
    for(let i=1; i<=this.totalPages; i++) {
      this.itemPages.push(i);
    }
  }
  showListMode(){
    this.isShow = !this.isShow;
  }
  //Move to prev page
  prevPage(){
    if(this.curPage == 1) {} 
    else this.curPage -= 1;
  }
  //Move to next page
  nextPage() {
    if(this.curPage == this.totalPages) return
    else {
      this.curPage += 1;
    }
  }
  //Choose
  choosePage(choosePage: String) {
    let choosePageNumber = +choosePage;
    this.curPage = choosePageNumber;
  }
  //Cal total page
  calTotalPage() {
    let array = [];
    if(this.curPage > this.itemEnd) {
      this.itemStart += 1;
      this.itemEnd += 1;
    }
    else if(this.curPage < this.itemStart) {
      this.itemEnd -= 1;
      this.itemStart -= 1;
    }
    for(let i=this.itemStart; i<=this.itemEnd; i++) {
      array.push(i);
    };
    return array
  };

  //Chose subject
  chooseSubject(idSubject) {
    this._listQuestion.idSubject = idSubject;
  }
}
