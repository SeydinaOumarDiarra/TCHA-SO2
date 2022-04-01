import { TestBed } from '@angular/core/testing';

import { ServivevilleService } from './serviveville.service';

describe('ServivevilleService', () => {
  let service: ServivevilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServivevilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
