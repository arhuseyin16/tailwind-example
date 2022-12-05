import { Component, OnInit } from '@angular/core';
import {PAGE_SIZE} from "../../../../shared/constants/table-page-size";

@Component({
  selector: 'app-system-document-table',
  templateUrl: './system-document-table.component.html',
  styleUrls: ['./system-document-table.component.scss']
})
export class SystemDocumentTableComponent implements OnInit {
  pageSize = PAGE_SIZE;
  listOfData: readonly any[] = [];
  listOfColumn = [
    {
      title:'system-document.module',
      width: "200px"
    },
    {
      title:'system-document.documentName',
      width: "350px"
    },
    {
      title:'system-document.version',
      width: "200px"
    },
    {
      title:'',
      width: "auto"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index+1,
      module: `module-name`,
      documentName: `document name`,
      version: `${index}.1.0`
    }));
  }

}
