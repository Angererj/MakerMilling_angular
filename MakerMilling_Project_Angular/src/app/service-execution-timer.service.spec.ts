import { TestBed } from '@angular/core/testing';

import { ServiceExecutionTimerService } from './service-execution-timer.service';

describe('ServiceExecutionTimerService', () => {
  let service: ServiceExecutionTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExecutionTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
