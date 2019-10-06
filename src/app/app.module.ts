import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxPaginationModule } from 'ngx-pagination'
import {ListQuestionService} from './service/list-question.service'
import {ListSubjectService} from './service/list-subject.service'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { ShowResultAndScoreComponent } from './show-result-and-score/show-result-and-score.component';
import { PronouncePageComponent } from './pronounce-page/pronounce-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { FindPasswordPageComponent } from './find-password-page/find-password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ListSubjectsComponent,
    QuestionPageComponent,
    ShowResultAndScoreComponent,
    PronouncePageComponent,
    ContactPageComponent,
    ReportPageComponent,
    FindPasswordPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path:'about', component: PronouncePageComponent},
      {path:'contact', component: ContactPageComponent},
      {path:'report', component: ReportPageComponent},
      {path:'user/login', component:LoginComponent},
      {path:'user/forgot', component: FindPasswordPageComponent},
      {path:'user/register', component:RegisterComponent},
      {path:'user/list', component:ListSubjectsComponent},
      {path:'user/list/:id', component:QuestionPageComponent},
      {path:'user/result', component:ShowResultAndScoreComponent},
      {path:'**', redirectTo: '', pathMatch: 'full'}  
    ]),
  ],
  providers: [ListQuestionService, ListSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
