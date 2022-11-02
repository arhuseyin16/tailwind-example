import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecordCreatedModalComponent } from './new-record-created-modal.component';

describe('NewRecordCreatedModalComponent', () => {
  let component: NewRecordCreatedModalComponent;
  let fixture: ComponentFixture<NewRecordCreatedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecordCreatedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRecordCreatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
