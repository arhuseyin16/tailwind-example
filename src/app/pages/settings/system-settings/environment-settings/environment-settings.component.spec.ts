import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentSettingsComponent } from './environment-settings.component';

describe('EnvironmentSettingsComponent', () => {
  let component: EnvironmentSettingsComponent;
  let fixture: ComponentFixture<EnvironmentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
