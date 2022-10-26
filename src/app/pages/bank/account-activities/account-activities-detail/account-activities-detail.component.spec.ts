import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActivitiesDetailComponent } from './account-activities-detail.component';

describe('AccountActivitiesDetailComponent', () => {
  let component: AccountActivitiesDetailComponent;
  let fixture: ComponentFixture<AccountActivitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountActivitiesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountActivitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
