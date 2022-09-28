import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateDashboardComponent } from './translate-dashboard.component';

describe('TranslateDashboardComponent', () => {
  let component: TranslateDashboardComponent;
  let fixture: ComponentFixture<TranslateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
