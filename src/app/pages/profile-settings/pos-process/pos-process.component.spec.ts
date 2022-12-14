import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosProcessComponent } from './pos-process.component';

describe('PosProcessComponent', () => {
  let component: PosProcessComponent;
  let fixture: ComponentFixture<PosProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
