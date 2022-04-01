import { TestBed } from '@angular/core/testing';

import { ServicespecialiteService } from './servicespecialite.service';

describe('ServicespecialiteService', () => {
  let service: ServicespecialiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicespecialiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
