import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationSchemeEditComponent } from './authorization-scheme-edit.component';

describe('AuthorizationSchemeEditComponent', () => {
  let component: AuthorizationSchemeEditComponent;
  let fixture: ComponentFixture<AuthorizationSchemeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationSchemeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationSchemeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
