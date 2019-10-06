import { TestBed } from '@angular/core/testing';

import { ListSubjectService } from './list-subject.service';

describe('ListSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListSubjectService = TestBed.get(ListSubjectService);
    expect(service).toBeTruthy();
  });
});
