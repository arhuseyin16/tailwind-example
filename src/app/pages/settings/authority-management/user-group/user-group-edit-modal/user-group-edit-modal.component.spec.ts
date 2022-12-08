import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupEditModalComponent } from './user-group-edit-modal.component';

describe('UserGroupEditModalComponent', () => {
  let component: UserGroupEditModalComponent;
  let fixture: ComponentFixture<UserGroupEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
