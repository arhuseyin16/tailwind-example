import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivitiesListFilterComponent } from './account-activities-list-filter.component';

describe('FilterComponent', () => {
  let component: AccountActivitiesListFilterComponent;
  let fixture: ComponentFixture<AccountActivitiesListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivitiesListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountActivitiesListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
