import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  arrayContainUser:any
  API_ALL_USER = 'https://cuong-dev1-api.herokuapp.com/students';
  newInfo = {
    "id": 2,
    "username": "Tuyetngan",
    "password": [

    ],
    "fullname": "Nguyễn Văn Tèo",
    "email": "teonv@fpt.edu.vn",
    "gender": "true",
    "birthday": "1995-12-21",
    "schoolfee": "1500000",
    "marks": "0",
    "history": [
      {
        "php": [
          {
            "date": new Date(),
            "mark": 6
          }
        ]
      }
    ]
  }
  constructor(private http: HttpClient, private router: Router ) { }

  public getJSON(idUser): Observable<any> {
    return this.http.get(this.API_ALL_USER+`/${idUser}`);
  }

  //Change information of student
  public changeInfo(user:any):Observable<any> {
    return this.http.put(this.API_ALL_USER + `/${user.id}`,user);
  }

  //Return all use function
  allUser() {
    return this.http.get(this.API_ALL_USER);
  }

  addNewUser(user) {
    return this.http.post(this.API_ALL_USER, user);
  }
  //Save result of quiz into database
  saveResult(userId, subjectId, mark) {
    let user:any;
    let apiUser = this.API_ALL_USER + `/${userId}`;
    this.http.get(apiUser).subscribe(data => {
      user = data;
      user.mark.push({
        'subject': subjectId,
        'mark': mark,
        'createdAt': new Date().toLocaleString().toString()
      });
     this.http.put(apiUser,user).subscribe(data => {
        this.router.navigate(['/user/list']);
     })
    })
  }

  //Login 
  loginForm(email, password){
    let isExist = false;
    let isValid = false;
    let idUser : number;
    this.allUser().subscribe(data => {
      this.arrayContainUser = data;
      for(let i=0; i< this.arrayContainUser.length; i++) {
        if(this.arrayContainUser[i].email == email) {
          if(this.arrayContainUser[i].password == password) 
            {
              isExist = true;
              isValid = true;
              idUser = this.arrayContainUser[i].id;
            }
          else isValid = false
        }
        else isExist = false
      }
    })

    return {isExist, isValid, idUser};
  } 
}
