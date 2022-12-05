import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyIntegrationComponent } from './currency-integration.component';

describe('CurrencyIntegrationComponent', () => {
  let component: CurrencyIntegrationComponent;
  let fixture: ComponentFixture<CurrencyIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
