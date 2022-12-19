import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationSchemaEditComponent } from './authorization-schema-edit.component';

describe('AuthorizationSchemeEditComponent', () => {
  let component: AuthorizationSchemaEditComponent;
  let fixture: ComponentFixture<AuthorizationSchemaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationSchemaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationSchemaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
