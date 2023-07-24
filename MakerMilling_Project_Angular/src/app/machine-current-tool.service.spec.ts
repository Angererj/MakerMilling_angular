import { TestBed } from '@angular/core/testing';

import { MachineCurrentToolService } from './machine-current-tool.service';

describe('MachineCurrentToolService', () => {
  let service: MachineCurrentToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineCurrentToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
