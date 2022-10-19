import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLineChartComponent } from './bank-line-chart.component';

describe('BankLineChartComponent', () => {
  let component: BankLineChartComponent;
  let fixture: ComponentFixture<BankLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
