import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDefinitionComponent } from './holiday-definition.component';

describe('HolidayDefinitionComponent', () => {
  let component: HolidayDefinitionComponent;
  let fixture: ComponentFixture<HolidayDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayDefinitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
