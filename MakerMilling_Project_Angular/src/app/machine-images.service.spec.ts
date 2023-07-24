import { TestBed } from '@angular/core/testing';

import { MachineImagesService } from './machine-images.service';

describe('MachineImagesService', () => {
  let service: MachineImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
