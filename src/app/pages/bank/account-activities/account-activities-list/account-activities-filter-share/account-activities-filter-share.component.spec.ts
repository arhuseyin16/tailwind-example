import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivitiesFilterShareComponent } from './account-activities-filter-share.component';

describe('AccountActivitiesShareFilterComponent', () => {
  let component: AccountActivitiesFilterShareComponent;
  let fixture: ComponentFixture<AccountActivitiesFilterShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivitiesFilterShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountActivitiesFilterShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
