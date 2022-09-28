import { TestBed } from '@angular/core/testing';

import { TranslateDashboardService } from './translate-dashboard.service';

describe('TranslateDashboardService', () => {
  let service: TranslateDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
