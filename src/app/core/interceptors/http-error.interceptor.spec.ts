import { TestBed } from '@angular/core/testing';
import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpErrorInterceptor', () => {
  let interceptor: HttpErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = new HttpErrorInterceptor();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
