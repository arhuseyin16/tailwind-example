import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDeleteModalComponent } from './holiday-delete-modal.component';

describe('HolidayDeleteModalComponent', () => {
  let component: HolidayDeleteModalComponent;
  let fixture: ComponentFixture<HolidayDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
