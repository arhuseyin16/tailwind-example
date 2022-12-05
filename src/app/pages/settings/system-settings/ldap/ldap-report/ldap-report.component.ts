import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {PAGE_SIZE} from "../../../../../shared/constants/table-page-size";

@Component({
  selector: 'app-ldap-report',
  templateUrl: './ldap-report.component.html',
  styleUrls: ['./ldap-report.component.scss']
})
export class LdapReportComponent implements OnInit {
  visible: boolean = false;
  pageSize = PAGE_SIZE;
  listOfData: readonly any[] = [];
  listOfColumn = [
    {
      title:'system-settings.id',
      compare: null,
      sort: true,
      sortOrder: null,
      width: "200px"
    },
    {
      title:'system-settings.workTime',
      compare: (a: any, b: any) => a.workTime - b.workTime,
      sort: true,
      sortOrder: null,
      width: "300px"
    },
    {
      title:'system-settings.status',
      compare: (a: any, b: any) => a.status - b.status,
      sort: true,
      sortOrder: null,
      width: "350px"
    },
    {
      title:'system-settings.description',
      compare: (a: any, b: any) => a.description - b.description,
      sort: true,
      sortOrder: null,
      width: "auto"
    }
  ]
  createdForm = this.fb.group({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index+1,
      workTime: `10.10.2022 09:16`,
      status: `info`,
      description: 'description'
    }));
  }

  clear() {
    this.createdForm.reset();
  }
}
