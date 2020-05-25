import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: BaseService = TestBed.inject(BaseService);
    expect(service).toBeTruthy();
  });
});
