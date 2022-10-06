import { Component, OnInit } from '@angular/core';
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-currencies-summaries',
  templateUrl: './currencies-summaries.component.html',
  styleUrls: ['./currencies-summaries.component.scss']
})
export class CurrenciesSummariesComponent implements OnInit {

  titles: NzSegmentedOptions = [
    {label: this.translateService.instant('transactions-dashboard.currency-totals'), value: 1},
    {label: this.translateService.instant('transactions-dashboard.currency-conversion'), value: 2},
  ];

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

}
