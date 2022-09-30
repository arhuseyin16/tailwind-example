import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountDetailHeaderComponent } from './bank-account-detail-header.component';

describe('BankAccountDetailHeaderComponent', () => {
  let component: BankAccountDetailHeaderComponent;
  let fixture: ComponentFixture<BankAccountDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountDetailHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccountDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
