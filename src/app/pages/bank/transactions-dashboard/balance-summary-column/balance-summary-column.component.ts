import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-summary-column',
  templateUrl: './balance-summary-column.component.html',
  styleUrls: ['./balance-summary-column.component.scss']
})
export class BalanceSummaryColumnComponent implements OnInit {

  @Input() summary: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
