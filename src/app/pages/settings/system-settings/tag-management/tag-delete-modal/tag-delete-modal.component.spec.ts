import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDeleteModalComponent } from './tag-delete-modal.component';

describe('TagDeleteModalComponent', () => {
  let component: TagDeleteModalComponent;
  let fixture: ComponentFixture<TagDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
