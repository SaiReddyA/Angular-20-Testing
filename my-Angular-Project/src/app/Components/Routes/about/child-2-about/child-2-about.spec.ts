import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2About } from './child-2-about';

describe('Child2About', () => {
  let component: Child2About;
  let fixture: ComponentFixture<Child2About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2About]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
