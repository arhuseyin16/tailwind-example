import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapReportComponent } from './ldap-report.component';

describe('LdapReportComponent', () => {
  let component: LdapReportComponent;
  let fixture: ComponentFixture<LdapReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LdapReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
