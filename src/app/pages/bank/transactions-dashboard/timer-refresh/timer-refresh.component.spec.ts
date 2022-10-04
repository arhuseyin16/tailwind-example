import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRefreshComponent } from './timer-refresh.component';

describe('TimerRefreshComponent', () => {
  let component: TimerRefreshComponent;
  let fixture: ComponentFixture<TimerRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
