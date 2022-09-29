import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/fusion-charts.config";

@Component({
  selector: 'app-balance-type',
  templateUrl: './balance-type.component.html',
  styleUrls: ['./balance-type.component.scss']
})
export class BalanceTypeComponent implements OnInit {

  @Input() currencies: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();
  @Input() title = '';
  @Input() dataSourceConfig: FusionChartsConfig = new FusionChartsConfig();


  constructor() { }

  ngOnInit(): void {
  }

}
