import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpApiSettingsComponent } from './erp-api-settings.component';

describe('ErpApiSettingsComponent', () => {
  let component: ErpApiSettingsComponent;
  let fixture: ComponentFixture<ErpApiSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpApiSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpApiSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
