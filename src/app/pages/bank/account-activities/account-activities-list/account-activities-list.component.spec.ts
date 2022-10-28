import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivitiesListComponent } from './account-activities-list.component';

describe('AccountActivitiesComponent', () => {
  let component: AccountActivitiesListComponent;
  let fixture: ComponentFixture<AccountActivitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivitiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
