import { TestBed } from '@angular/core/testing';

import { SharedCartDataService } from './shared-cart-data.service';

describe('SharedCartDataService', () => {
  let service: SharedCartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
