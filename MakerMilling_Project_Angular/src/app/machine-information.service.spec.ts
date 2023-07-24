import { TestBed } from '@angular/core/testing';

import { MachineInformationService } from './machine-information.service';

describe('MachineInformationService', () => {
  let service: MachineInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
