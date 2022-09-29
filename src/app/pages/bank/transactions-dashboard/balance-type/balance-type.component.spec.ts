import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTypeComponent } from './balance-type.component';

describe('BalanceTypeComponent', () => {
  let component: BalanceTypeComponent;
  let fixture: ComponentFixture<BalanceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
