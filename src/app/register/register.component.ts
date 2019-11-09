import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {user} from './../schemas/user.class';
import {ListUserService} from './../service/list-user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  email:string;
  password: string;
  repassword:string;
  user:user;
  userArr:any;
  listUsers: any = [];
  regUserName = /^\S{5,30}$/;
  regEmail = /^\w+\@\w+\.\w+$/;
  constructor(private _listUserService: ListUserService, private router: Router) { }

  ngOnInit() {
  }

  registerSubmit() {
    let isEmailExist = false;
    if(this.username == null || this.username == '') alert('Bạn chưa nhập tên tài khoản')
    else {
      if(this.regUserName.test(this.username)) {
        if(this.email == null || this.email == '') alert('Bạn chưa nhập email');
        else {
          this._listUserService.allUser().subscribe(data => {
            this.listUsers = data;
            this.listUsers.forEach(element => {
              if(this.email == element.email) {
                isEmailExist = true;
              }
            });

            if(isEmailExist) alert("Email đã tồn tại");
            else {
              if(this.regEmail.test(this.email)) {
                if(this.password == null || this.password == '') alert('Bạn chưa nhập mật khẩu')
                else{
                  if(this.repassword == null || this.repassword == '') alert('Bạn chưa xác nhận mật khẩu');
                  else {
                    if(this.password != this.repassword) alert('Mật khẩu và xác nhận mật khẩu không trùng nhau')
                    else {
                      this.user = new user(this.username, this.email, this.password, true, '01/01/1996', 0);
                      this._listUserService.addNewUser(this.user).subscribe(data => {
                        this.router.navigate(['user/login']);
                      })
                    }
                  }
                }
              }
              else alert('Email không hợp lệ')
            }    
          }); 
        }
      }
      else alert('Tên đăng nhập không hợp lệ')
    }
  }
}
