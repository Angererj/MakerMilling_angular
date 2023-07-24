import { TestBed } from '@angular/core/testing';

import { MachineMainStateService } from './machine-main-state.service';

describe('MachineMainStateService', () => {
  let service: MachineMainStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineMainStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
