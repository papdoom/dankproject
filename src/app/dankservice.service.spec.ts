import { TestBed, inject } from '@angular/core/testing';

import { DankserviceService } from './dankservice.service';

describe('DankserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DankserviceService]
    });
  });

  it('should be created', inject([DankserviceService], (service: DankserviceService) => {
    expect(service).toBeTruthy();
  }));
});
