import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResultAndScoreComponent } from './show-result-and-score.component';

describe('ShowResultAndScoreComponent', () => {
  let component: ShowResultAndScoreComponent;
  let fixture: ComponentFixture<ShowResultAndScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResultAndScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResultAndScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
