import { TestBed } from '@angular/core/testing';

import { HealthChecks } from './health-checks';

describe('HealthChecks', () => {
  let service: HealthChecks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthChecks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
