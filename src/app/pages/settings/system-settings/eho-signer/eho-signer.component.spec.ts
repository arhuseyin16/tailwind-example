import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhoSignerComponent } from './eho-signer.component';

describe('EhoSignerComponent', () => {
  let component: EhoSignerComponent;
  let fixture: ComponentFixture<EhoSignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhoSignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EhoSignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
