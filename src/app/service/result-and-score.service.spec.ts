import { TestBed } from '@angular/core/testing';

import { ResultAndScoreService } from './result-and-score.service';

describe('ResultAndScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultAndScoreService = TestBed.get(ResultAndScoreService);
    expect(service).toBeTruthy();
  });
});
