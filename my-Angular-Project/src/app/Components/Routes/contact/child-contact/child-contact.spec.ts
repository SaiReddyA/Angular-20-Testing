import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContact } from './child-contact';

describe('ChildContact', () => {
  let component: ChildContact;
  let fixture: ComponentFixture<ChildContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
