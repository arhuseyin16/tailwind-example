import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupNewRecordModalComponent } from './user-group-new-record-modal.component';

describe('UserGroupNewRecordModalComponent', () => {
  let component: UserGroupNewRecordModalComponent;
  let fixture: ComponentFixture<UserGroupNewRecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupNewRecordModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupNewRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
