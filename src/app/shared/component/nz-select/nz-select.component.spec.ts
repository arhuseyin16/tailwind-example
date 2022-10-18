import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzSelectComponent } from './nz-select.component';

describe('NzSelectComponent', () => {
  let component: NzSelectComponent;
  let fixture: ComponentFixture<NzSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
