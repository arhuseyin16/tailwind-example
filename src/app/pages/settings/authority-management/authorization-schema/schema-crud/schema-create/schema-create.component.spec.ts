import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCreateComponent } from './schema-create.component';

describe('SchemeCreateComponent', () => {
  let component: SchemaCreateComponent;
  let fixture: ComponentFixture<SchemaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
