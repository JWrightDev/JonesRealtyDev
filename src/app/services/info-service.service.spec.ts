import { TestBed } from '@angular/core/testing';

import { InfoService } from './info.service';

describe('PropertyServiceService', () => {
  let service: InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
