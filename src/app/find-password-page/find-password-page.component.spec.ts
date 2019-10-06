import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPasswordPageComponent } from './find-password-page.component';

describe('FindPasswordPageComponent', () => {
  let component: FindPasswordPageComponent;
  let fixture: ComponentFixture<FindPasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPasswordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
