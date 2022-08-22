import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRentedComponent } from './owner-rented.component';

describe('OwnerRentedComponent', () => {
  let component: OwnerRentedComponent;
  let fixture: ComponentFixture<OwnerRentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerRentedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
