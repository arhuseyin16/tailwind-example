import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReceiptModalComponent } from './print-receipt-modal.component';

describe('PrintReceiptComponent', () => {
  let component: PrintReceiptModalComponent;
  let fixture: ComponentFixture<PrintReceiptModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintReceiptModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintReceiptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
