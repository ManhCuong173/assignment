import { TestBed } from '@angular/core/testing';

import { ListQuestionService } from './list-question.service';

describe('ListQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListQuestionService = TestBed.get(ListQuestionService);
    expect(service).toBeTruthy();
  });
});
