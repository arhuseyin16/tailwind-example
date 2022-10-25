import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutEchartComponent } from './doughnut-echart.component';

describe('DoughnutEchartComponent', () => {
  let component: DoughnutEchartComponent;
  let fixture: ComponentFixture<DoughnutEchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutEchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughnutEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
