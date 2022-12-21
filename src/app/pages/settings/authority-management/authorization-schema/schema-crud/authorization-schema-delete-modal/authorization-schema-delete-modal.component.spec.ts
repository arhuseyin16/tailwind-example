import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationSchemaDeleteModalComponent } from './authorization-schema-delete-modal.component';

describe('AuthorizationSchemaDeleteModalComponent', () => {
  let component: AuthorizationSchemaDeleteModalComponent;
  let fixture: ComponentFixture<AuthorizationSchemaDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationSchemaDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationSchemaDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
