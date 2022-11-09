import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivitiesShareFilterComponent } from './account-activities-share-filter.component';

describe('AccountActivitiesShareFilterComponent', () => {
  let component: AccountActivitiesShareFilterComponent;
  let fixture: ComponentFixture<AccountActivitiesShareFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivitiesShareFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountActivitiesShareFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
