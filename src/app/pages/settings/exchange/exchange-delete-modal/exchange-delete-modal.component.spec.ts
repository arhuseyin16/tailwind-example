import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeDeleteModalComponent } from './exchange-delete-modal.component';

describe('ExchangeDeleteModalComponent', () => {
  let component: ExchangeDeleteModalComponent;
  let fixture: ComponentFixture<ExchangeDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
