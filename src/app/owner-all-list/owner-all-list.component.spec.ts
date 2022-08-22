import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAllListComponent } from './owner-all-list.component';

describe('OwnerAllListComponent', () => {
  let component: OwnerAllListComponent;
  let fixture: ComponentFixture<OwnerAllListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAllListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
