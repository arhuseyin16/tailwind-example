import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDescriptionComponent } from './edit-user-description.component';

describe('EditUserDescriptionComponent', () => {
  let component: EditUserDescriptionComponent;
  let fixture: ComponentFixture<EditUserDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
