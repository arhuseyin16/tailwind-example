import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentBarComponent } from './segment-bar.component';

describe('CurrencyBarSegmentComponent', () => {
  let component: SegmentBarComponent;
  let fixture: ComponentFixture<SegmentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
