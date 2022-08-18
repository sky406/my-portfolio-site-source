import { TestBed } from '@angular/core/testing';

import { MeservService } from './meserv.service';

describe('MeservService', () => {
  let service: MeservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
