import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddPgComponent } from './owner-add-pg.component';

describe('OwnerAddPgComponent', () => {
  let component: OwnerAddPgComponent;
  let fixture: ComponentFixture<OwnerAddPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerAddPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAddPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
