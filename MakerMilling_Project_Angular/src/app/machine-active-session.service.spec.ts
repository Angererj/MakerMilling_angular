import { TestBed } from '@angular/core/testing';

import { MachineActiveSessionService } from './machine-active-session.service';

describe('MachineActiveSessionService', () => {
  let service: MachineActiveSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineActiveSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
