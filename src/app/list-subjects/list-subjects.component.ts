import { Component, OnInit,  ElementRef } from '@angular/core';
import { ListSubjectService } from './../service/list-subject.service'
import { ListQuestionService } from './../service/list-question.service'
import {ListUserService} from './../service/list-user.service' 
import {Router} from '@angular/router'
import {CookieService} from 'ngx-cookie-service'
import {CheckLoginService} from './../middleware/check-login.service'
@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css'],
  providers: [ListSubjectService, ListQuestionService, ListUserService]
})
export class ListSubjectsComponent implements OnInit {
  isShow = false;
  idUser: string;
  itemPerPage = 6;
  curPage = 1;
  itemPages = [];
  itemStart = 1;
  itemEnd = 3;
  user : any = {};
  users: any = [];
  userBirthday: Date;

  //Change Password Variables
  password: any;
  newpassword:any;
  renewpassword: any;

  constructor(private _listSubject: ListSubjectService, private _listQuestion: ListQuestionService, private _listUser: ListUserService, private _elementRef : ElementRef, private routerNavigate: Router, private _cookie: CookieService, private _checkLoginService: CheckLoginService) { }
  
  listSubjectComponent = this._listSubject.listSubjects;
  totalPages = Math.ceil(this.listSubjectComponent.length / this.itemPerPage);
  isPending = false;
  ngOnInit() {
    //Middleware 
    this._checkLoginService.isLogin(this._cookie.get('user-id'));

    //Get query param 
      this.idUser = this._cookie.get('user-id');

    for(let i=1; i<=this.totalPages; i++) {
      this.itemPages.push(i);
    } 

    this._listUser.getJSON(this.idUser).subscribe(data => {
      this.user = data;
      this.userBirthday = this.user.birthday;
      this.user.gender?this.user.gender='male':this.user.gender='female';
      this._elementRef.nativeElement.querySelector(`#${this.user.gender}`).checked = true;
    })
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

  //Change Password
  changePassword() {
    if(this.password == undefined || this.password == '') alert('Bạn chưa nhập mật khẩu cũ')
    else {
      if(this.password != this.user.password[this.user.password.length - 1] && this.password != undefined) alert('Mật khẩu cũ không đúng')
      else{
        if(this.newpassword == undefined || this.newpassword == '') alert('Bạn chưa nhập mật khẩu mới');
        else{
          if(this.renewpassword == undefined || this.renewpassword == '') alert('Bạn chưa nhập mật khẩu xác minh');
          else{
            if(this.newpassword != this.renewpassword) alert("Mật khẩu xác minh không trùng khớp");
            else {
              this.user.password.push(this.newpassword);
              this.changeInfo();
            }
          }
        }
      }
    }
  }

  //Chose subject
  chooseSubject(idSubject) {
    this._listQuestion.idSubject = idSubject;
    this.routerNavigate.navigate(['user/quiz'], {queryParams: {userId: `${this.user.id}`, 'quizId': `${idSubject}`}})
  }

  //Check gender function
  checkGender(gender) {
    this.user.gender = gender;
  }

  //Change infomartion of user
  changeInfo(){
    let isUsed = false;
    this._listUser.allUser().subscribe(data => {
      this.users = data;
      this.users.forEach(element => {
        if(this.user.email == element.email) isUsed = !isUsed;
      });
    if(isUsed) alert("Email này đã có người sử dụng");
    else {
      if(this.user.gender=='male') this.user.gender = true
          else this.user.gender = false;
          this.user.birthday = this.userBirthday;
          this._listUser.changeInfo(this.user).subscribe(data => {
            alert('Thay đổi thông tin thành công');
          });
    }
    })
  }

  //Sign out 
  signOut(){
    this._cookie.delete('user-id');
  }
}
