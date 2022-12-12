import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivitiesListTableComponent } from './account-activities-list-table.component';

describe('AccountActivitiesListTableComponent', () => {
  let component: AccountActivitiesListTableComponent;
  let fixture: ComponentFixture<AccountActivitiesListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivitiesListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountActivitiesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
