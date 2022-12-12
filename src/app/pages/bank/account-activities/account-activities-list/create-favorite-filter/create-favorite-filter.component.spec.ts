import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFavoriteFilterComponent } from './create-favorite-filter.component';

describe('CreateFavoriteFilterComponent', () => {
  let component: CreateFavoriteFilterComponent;
  let fixture: ComponentFixture<CreateFavoriteFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFavoriteFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFavoriteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
