import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailTitleComponent } from './header-detail-title.component';

describe('HeaderDetailTitleComponent', () => {
  let component: HeaderDetailTitleComponent;
  let fixture: ComponentFixture<HeaderDetailTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDetailTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDetailTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
