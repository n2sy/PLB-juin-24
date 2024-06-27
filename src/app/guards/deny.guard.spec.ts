import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { denyGuard } from './deny.guard';

describe('denyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => denyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
