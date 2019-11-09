import { Component, OnInit } from '@angular/core';
import { ListUserService } from './../service/list-user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-find-password-page',
  templateUrl: './find-password-page.component.html',
  styleUrls: ['./find-password-page.component.css']
})
export class FindPasswordPageComponent implements OnInit {

  email: any
  oldPassword: any;
  newPassword: any;
  reNewPassword: any;
  users: any;
  errors: Array<String> = [];

  //Index using generally
  index: number;

  //Use for checking internal functions return
  flagForPassword: boolean = false;
  flagForEmail: boolean = false;
  constructor(private _listUserService: ListUserService, private Router: Router) { }

  ngOnInit() {
  }

  /*
  Function: Check flag for password
  Meaning: Reverse to default flag
  */
  checkFlagForPassword() {
    this.flagForPassword = !this.flagForPassword;
  }

  showErrors() {
    this.errors.forEach(element => {
      alert(element.toString());
    });
    this.errors = [];
  };

  returnIndex(position) {
    this.index = position;
  }

  findPassword(passwords, oldPassword) {

    if (!oldPassword) {
      this.errors.push('Bạn chưa nhập mật khẩu');
      return false;
    } else {
      //Find password
      passwords.forEach(element => {
        if (element == oldPassword) {
          this.checkFlagForPassword();
          return;
        }
      });

      //Check result true/false
      if (this.flagForPassword) {
        this.checkFlagForPassword();
        return true;
      }
      else {
        this.errors.push('Mật khẩu cũ không chính xác');
        return false;
      }
    }
  };

  findEmail(users, email, oldPassword) {
    if (!email) {
      this.errors.push('Bạn chưa nhập email');
      return false;
    } else {
      //Find email 
      users.forEach((element, index) => {
        if (element.email == email) {
          if (this.findPassword(element.password, oldPassword)) {
            this.checkFlagForPassword();
            this.returnIndex(index)
            if (element.email !== email) this.flagForEmail = false;
            return;
          }
          else this.flagForEmail = true
        }
      });

      if (this.flagForPassword) {
        this.checkFlagForPassword();
        return true;
      }
      else {
        if (this.flagForEmail == false) {
          this.errors.push('Không tôn tại email này');
          this.flagForEmail = false;
        }
        return false;
      }
    }
  };

  findAndChangePassword() {
    this._listUserService.allUser().subscribe(data => {
      this.users = data;
      if (this.findEmail(this.users, this.email, this.oldPassword)) {
        if(!this.newPassword || !this.reNewPassword) {
          alert('Bạn cần điền đầy đủ thông tin');
          return;
        }
        else if(this.newPassword != this.reNewPassword) {
          alert('Mật khẩu xác thực không trùng');
          return;
        }
        else {
          this.users[this.index].password.push(this.newPassword);
          this._listUserService.changeInfo(this.users[this.index]).subscribe(data => {
            this.Router.navigate(['/user/login']);
          });
        }
      }
      else this.showErrors();
    });
  };
}
