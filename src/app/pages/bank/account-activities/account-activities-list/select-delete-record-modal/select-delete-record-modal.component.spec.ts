import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeleteRecordModalComponent } from './select-delete-record-modal.component';

describe('SelectDeleteRecordModalComponent', () => {
  let component: SelectDeleteRecordModalComponent;
  let fixture: ComponentFixture<SelectDeleteRecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDeleteRecordModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDeleteRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
