import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterHelperService {

  isDeactive:boolean = false;
  constructor() { }

  changeStateDeactVariable() {
    this.isDeactive = !this.isDeactive;
  }
}
