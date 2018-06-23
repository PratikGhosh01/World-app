import { TestBed, inject } from '@angular/core/testing';

import { WorldHttpService } from './world-http.service';

describe('WorldHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldHttpService]
    });
  });

  it('should be created', inject([WorldHttpService], (service: WorldHttpService) => {
    expect(service).toBeTruthy();
  }));
});
