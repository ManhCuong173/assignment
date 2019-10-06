import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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

  constructor(private router: Router) { }

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
    this.router.navigate(['/user/list']);
  }

}
