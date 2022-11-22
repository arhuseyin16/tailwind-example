import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsSettingsComponent } from './dbs-settings.component';

describe('DbsSettingsComponent', () => {
  let component: DbsSettingsComponent;
  let fixture: ComponentFixture<DbsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbsSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
