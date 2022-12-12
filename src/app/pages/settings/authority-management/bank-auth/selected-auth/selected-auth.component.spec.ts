import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAuthComponent } from './selected-auth.component';

describe('SelectedAuthComponent', () => {
  let component: SelectedAuthComponent;
  let fixture: ComponentFixture<SelectedAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
