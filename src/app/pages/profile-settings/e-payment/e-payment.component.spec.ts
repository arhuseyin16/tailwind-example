import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPaymentComponent } from './e-payment.component';

describe('EPaymentComponent', () => {
  let component: EPaymentComponent;
  let fixture: ComponentFixture<EPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
