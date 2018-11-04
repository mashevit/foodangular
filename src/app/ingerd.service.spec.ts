import { TestBed } from '@angular/core/testing';

import { IngerdService } from './ingerd.service';

describe('IngerdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngerdService = TestBed.get(IngerdService);
    expect(service).toBeTruthy();
  });
});
