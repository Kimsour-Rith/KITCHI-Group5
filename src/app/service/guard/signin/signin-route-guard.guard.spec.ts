import { TestBed } from '@angular/core/testing';

import { SigninRouteGuardGuard } from './signin-route-guard.guard';

describe('SigninRouteGuardGuard', () => {
  let guard: SigninRouteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SigninRouteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
