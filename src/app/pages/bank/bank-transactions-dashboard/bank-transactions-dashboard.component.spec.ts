import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTransactionsDashboardComponent } from './bank-transactions-dashboard.component';

describe('BankTransactionsDashboardComponent', () => {
  let component: BankTransactionsDashboardComponent;
  let fixture: ComponentFixture<BankTransactionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankTransactionsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankTransactionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
