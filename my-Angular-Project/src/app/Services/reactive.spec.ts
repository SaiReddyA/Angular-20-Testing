import { TestBed } from '@angular/core/testing';

import { Reactive } from './reactive';

describe('Reactive', () => {
  let service: Reactive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reactive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
