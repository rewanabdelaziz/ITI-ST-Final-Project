import { TestBed } from '@angular/core/testing';

import { SharedCartArrayService } from './shared-cart-array.service';

describe('SharedCartArrayService', () => {
  let service: SharedCartArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCartArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
