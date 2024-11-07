import { TestBed } from '@angular/core/testing';

import { SanduchesService } from './sanduches.service';

describe('SanduchesService', () => {
  let service: SanduchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanduchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
