import { TestBed } from '@angular/core/testing';

import { IncidentComments } from './incident-comments';

describe('IncidentComments', () => {
  let service: IncidentComments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentComments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
