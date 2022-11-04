import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizationModalComponent } from './synchronization-modal.component';

describe('SynchronizationModalComponent', () => {
  let component: SynchronizationModalComponent;
  let fixture: ComponentFixture<SynchronizationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynchronizationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchronizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
