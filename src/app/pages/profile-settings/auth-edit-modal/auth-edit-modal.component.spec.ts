import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEditModalComponent } from './auth-edit-modal.component';

describe('AuthEditModalComponent', () => {
  let component: AuthEditModalComponent;
  let fixture: ComponentFixture<AuthEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
