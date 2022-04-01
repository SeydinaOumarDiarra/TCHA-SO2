import { TestBed } from '@angular/core/testing';

import { ServivesserviceService } from './servivesservice.service';

describe('ServivesserviceService', () => {
  let service: ServivesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServivesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
