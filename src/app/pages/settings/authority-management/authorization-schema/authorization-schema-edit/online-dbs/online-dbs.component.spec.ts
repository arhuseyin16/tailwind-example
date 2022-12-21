import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDbsComponent } from './online-dbs.component';

describe('OnlineDbsComponent', () => {
  let component: OnlineDbsComponent;
  let fixture: ComponentFixture<OnlineDbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineDbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineDbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
