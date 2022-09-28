import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bank-table',
  templateUrl: './bank-table.component.html',
  styleUrls: ['./bank-table.component.scss']
})
export class BankTableComponent implements OnInit {
  @Input() bankList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
