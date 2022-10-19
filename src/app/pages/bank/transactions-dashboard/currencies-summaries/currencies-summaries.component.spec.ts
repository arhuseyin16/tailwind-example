import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesSummariesComponent } from './currencies-summaries.component';

describe('CurrenciesSummariesComponent', () => {
  let component: CurrenciesSummariesComponent;
  let fixture: ComponentFixture<CurrenciesSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesSummariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenciesSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
