import { TestBed } from '@angular/core/testing';

import { ServiceprofilService } from './serviceprofil.service';

describe('ServiceprofilService', () => {
  let service: ServiceprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
