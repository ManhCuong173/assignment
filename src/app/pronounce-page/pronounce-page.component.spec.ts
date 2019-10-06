import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouncePageComponent } from './pronounce-page.component';

describe('PronouncePageComponent', () => {
  let component: PronouncePageComponent;
  let fixture: ComponentFixture<PronouncePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronouncePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronouncePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
