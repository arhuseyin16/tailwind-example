import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBarSegmentComponent } from './currency-bar-segment.component';

describe('CurrencyBarSegmentComponent', () => {
  let component: CurrencyBarSegmentComponent;
  let fixture: ComponentFixture<CurrencyBarSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyBarSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyBarSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
