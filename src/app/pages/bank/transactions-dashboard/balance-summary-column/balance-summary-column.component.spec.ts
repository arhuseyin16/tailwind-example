import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSummaryColumnComponent } from './balance-summary-column.component';

describe('MoneyFlowComponent', () => {
  let component: BalanceSummaryColumnComponent;
  let fixture: ComponentFixture<BalanceSummaryColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceSummaryColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceSummaryColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
