import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeCrudComponent } from './scheme-crud.component';

describe('SchemeCrudComponent', () => {
  let component: SchemeCrudComponent;
  let fixture: ComponentFixture<SchemeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
