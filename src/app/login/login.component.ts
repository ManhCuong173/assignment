import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'
import {ListUserService} from './../service/list-user.service'
import {CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ListUserService],
  animations: [
    trigger('changePosition', [
      state('changed', style({
        transform: 'translateX(150%)'
      })),
      state('unchanged', style({
        transform: 'translateX(0%)'
      })),
      transition('unchanged => changed', [
        animate('1s')
      ])    
    ])
  ]
})
export class LoginComponent implements OnInit {

  changed :any = false
  currentStyle :any;
  array :any = [];
  email: string = null;
  password: string = null;
  constructor(private router: Router, private _listUserService: ListUserService, private cookieService: CookieService) { }

  ngOnInit() {
    this.changed = false;
  }

  get stateChange() {
    return this.changed ? 'changed' : 'unchanged'; 
  }

  toggle()  {
    this.changed = !this.changed;    
    setTimeout(() => {
      this.router.navigate(['/user/register']);
    },1500);
  }

  navigateToListSubject() {
    let API_Responde: any;
    this._listUserService.allUser().subscribe( data => {
      API_Responde = data;
      if(this.email == null || this.password == null) alert('Bạn cần nhập đầy đủ thông tin');
      else {
        for(let i=0; i< API_Responde.length; i++) {
          if(API_Responde[i].email == this.email) {
            if(API_Responde[i].password[API_Responde[i].password.length - 1] == this.password) 
              {
                alert('Đăng nhập thành công')
                this.router.navigate([`/user/list`]);
                //Create cookie 
                this.cookieService.set('user-id', API_Responde[i].id,1/24);
                return;
              }
          }
        }
      }
      alert('Thông tin tài khoản không chính xác');
      return;
    })  
  }

}
