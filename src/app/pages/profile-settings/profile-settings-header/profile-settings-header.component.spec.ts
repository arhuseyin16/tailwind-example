import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsHeaderComponent } from './profile-settings-header.component';

describe('ProfileSettingsHeaderComponent', () => {
  let component: ProfileSettingsHeaderComponent;
  let fixture: ComponentFixture<ProfileSettingsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettingsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
