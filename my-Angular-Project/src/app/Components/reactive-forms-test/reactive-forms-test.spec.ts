import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTest } from './reactive-forms-test';

describe('ReactiveFormsTest', () => {
  let component: ReactiveFormsTest;
  let fixture: ComponentFixture<ReactiveFormsTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
