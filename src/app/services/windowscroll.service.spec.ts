import { TestBed, inject } from '@angular/core/testing';

import { WindowscrollService } from './windowscroll.service';

describe('WindowscrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowscrollService]
    });
  });

  it('should be created', inject([WindowscrollService], (service: WindowscrollService) => {
    expect(service).toBeTruthy();
  }));
});
