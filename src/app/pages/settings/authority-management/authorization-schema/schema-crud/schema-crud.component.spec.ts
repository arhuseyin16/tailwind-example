import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCrudComponent } from './schema-crud.component';

describe('SchemeCrudComponent', () => {
  let component: SchemaCrudComponent;
  let fixture: ComponentFixture<SchemaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
