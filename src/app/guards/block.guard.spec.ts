import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { blockGuard } from './block.guard';

describe('blockGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blockGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
