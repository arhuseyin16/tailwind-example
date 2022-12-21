import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaListComponent } from './schema-list.component';

describe('SchemeListComponent', () => {
  let component: SchemaListComponent;
  let fixture: ComponentFixture<SchemaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
