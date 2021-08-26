import { TestBed } from '@angular/core/testing';

import { SuppsService } from './supps.service';

describe('SuppsService', () => {
  let service: SuppsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
