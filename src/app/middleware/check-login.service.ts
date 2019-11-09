import { Injectable } from '@angular/core';
import { Router, RouterState } from '@angular/router' 
import {CookieService} from 'ngx-cookie-service'
import { decode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  constructor(private _router: Router, private _cookie: CookieService) { }
  
  /**
   * Check login middleware
   * => boolean
   */

   isLogin(userid: string): void {
    if(userid) return;
    this._router.navigate(['']);
   };

   isLogout(userid: string): void {
    if(!userid) this._router.navigate(['/user/login']);
    return; 
   }
}
