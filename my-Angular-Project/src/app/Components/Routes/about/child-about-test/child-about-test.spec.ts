import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAboutTest } from './child-about-test';

describe('ChildAboutTest', () => {
  let component: ChildAboutTest;
  let fixture: ComponentFixture<ChildAboutTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAboutTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAboutTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
