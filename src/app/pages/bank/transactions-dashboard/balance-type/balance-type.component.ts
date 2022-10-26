import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { SegmentBarConfig } from "../../../../shared/component/segment-bar/segment-bar.config";
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-balance-type',
  templateUrl: './balance-type.component.html',
  styleUrls: ['./balance-type.component.scss']
})
export class BalanceTypeComponent implements OnInit {

  @Input() title = '';
  @Input() segmentBarConfig: SegmentBarConfig | undefined;
  @Input() chartsOption?: EChartsOption;

  @Output() currencyChange = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  selectedCurrency(currency: any) {
    this.currencyChange.emit(currency.label);
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
