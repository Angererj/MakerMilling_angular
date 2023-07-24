import { TestBed } from '@angular/core/testing';

import { MachineStateService } from './machine-state.service';

describe('MachineStateService', () => {
  let service: MachineStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
