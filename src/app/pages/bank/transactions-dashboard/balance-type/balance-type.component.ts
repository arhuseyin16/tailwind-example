import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import {Store} from "@ngxs/store";
import {ChartState} from "../../../../store/chart/chart.state";
import { FusionChartsConfig } from "../../../../models/shared/chart/fusion-charts.config";
import { SegmentBarConfig } from "../../../../shared/component/segment-bar/segment-bar.config";

@Component({
  selector: 'app-balance-type',
  templateUrl: './balance-type.component.html',
  styleUrls: ['./balance-type.component.scss']
})
export class BalanceTypeComponent implements OnInit {

  @Input() currencies: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();
  @Input() title = '';
  @Input() fusionChartsConfig: FusionChartsConfig = new FusionChartsConfig();
  @Input() segmentBarConfig: SegmentBarConfig | undefined;

  defaultCurrency = 1;

  constructor() {

  }

  ngOnInit(): void {

  }

  selectedCurrency(currency: any) {
    const differentCurrency = currency.value > this.defaultCurrency ? currency.value / this.defaultCurrency : this.defaultCurrency / currency.value;
    this.defaultCurrency = currency.value;
   /* if(this.fusionChartsConfig) {
      this.fusionChartsConfig.chart.numberSuffix = CurrencyUtil.getCurrencyUtilByName(currency.label);
      this.fusionChartsConfig?.data?.forEach(d => d.value = d.value * Math.round(differentCurrency));
      this.chartObj.setJSONData({
        chart: this.fusionChartsConfig.chart,
        data: this.fusionChartsConfig.data
      });
    }*/

  }




}
