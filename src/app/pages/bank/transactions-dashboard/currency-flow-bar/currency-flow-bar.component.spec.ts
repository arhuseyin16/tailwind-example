import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFlowBarComponent } from './currency-flow-bar.component';

describe('MoneyMarketComponent', () => {
  let component: CurrencyFlowBarComponent;
  let fixture: ComponentFixture<CurrencyFlowBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyFlowBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyFlowBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
