import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDocumentsComponent } from './system-documents.component';

describe('SystemDocumentsComponent', () => {
  let component: SystemDocumentsComponent;
  let fixture: ComponentFixture<SystemDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
