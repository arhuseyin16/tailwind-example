import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDocumentTableComponent } from './system-document-table.component';

describe('SystemDocumentTableComponent', () => {
  let component: SystemDocumentTableComponent;
  let fixture: ComponentFixture<SystemDocumentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemDocumentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemDocumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
