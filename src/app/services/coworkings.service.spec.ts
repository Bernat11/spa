import { TestBed } from '@angular/core/testing';

import { CoworkingsService } from './coworkings.service';

describe('CoworkingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoworkingsService = TestBed.get(CoworkingsService);
    expect(service).toBeTruthy();
  });
});
