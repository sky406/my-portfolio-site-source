import { TestBed } from '@angular/core/testing';

import { ProjectservService } from './projectserv.service';

describe('ProjectservService', () => {
  let service: ProjectservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
