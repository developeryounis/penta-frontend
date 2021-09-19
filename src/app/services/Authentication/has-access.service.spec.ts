import { TestBed } from '@angular/core/testing';

import { HasAccessService } from './has-access.service';

describe('HasAccessService', () => {
  let service: HasAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
