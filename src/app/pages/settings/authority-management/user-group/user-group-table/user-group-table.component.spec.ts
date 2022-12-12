import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupTableComponent } from './user-group-table.component';

describe('UserGroupTableComponent', () => {
  let component: UserGroupTableComponent;
  let fixture: ComponentFixture<UserGroupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
