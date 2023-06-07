import { TestBed } from '@angular/core/testing';

import { PenditeService } from './pendite.service';

describe('PenditeService', () => {
  let service: PenditeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenditeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
