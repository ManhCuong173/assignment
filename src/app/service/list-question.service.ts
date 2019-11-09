import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListQuestionService {

  idSubject:any;
  constructor(private http: HttpClient) {
  }

  public getJSON(subjectId): Observable<any> {
      return this.http.get(`./../../assets/TaiNguyen/db/Quizs/${subjectId}.json`);
  }
}