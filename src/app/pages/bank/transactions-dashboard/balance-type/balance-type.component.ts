import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/fusion-charts.config";
import FusionChartsEvent from "../../../../shared/fusion-charts/interfaces/FusionChartsEvent";
import { CurrencyUtil } from "../../../../shared/util/currency.util";

@Component({
  selector: 'app-balance-type',
  templateUrl: './balance-type.component.html',
  styleUrls: ['./balance-type.component.scss']
})
export class BalanceTypeComponent implements OnInit {

  @Input() currencies: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();
  @Input() title = '';
  @Input() dataSourceConfig: FusionChartsConfig = new FusionChartsConfig();
  dataSource: any;
  chartObj: any;
  defaultCurrency = 1;
  constructor() { }

  ngOnInit(): void {
    if(this.dataSourceConfig) {
      this.dataSource = {
        chart: {
          numberPrefix: this.dataSourceConfig.numberPrefix,
          numberSuffix: this.dataSourceConfig.numberSuffix,
          bgColor: this.dataSourceConfig.bgColor,
          showLegend: this.dataSourceConfig.showLegend,
          defaultCenterLabel: this.dataSourceConfig.defaultCenterLabel,
          centerLabel: this.dataSourceConfig.centerLabel,
          centerLabelBold: `1`,
          decimals: this.dataSourceConfig.decimal,
          doughnutRadius: this.dataSourceConfig.doughnutRadius,
          theme: `fusion`,
          legendIconScale: this.dataSourceConfig.legendIconScale,
          legendNumRows: this.dataSourceConfig.legendNumRows,
          legendNumColumns: this.dataSourceConfig.legendNumColumns,
          legendPosition: this.dataSourceConfig.legendPosition,
          decimalSeparator: this.dataSourceConfig.decimalSeparator,
          thousandSeparator: this.dataSourceConfig.thousandSeparator,
          labelFontSize: this.dataSourceConfig.labelFontSize,
          showLabels: this.dataSourceConfig.showLabels,
          showValues: this.dataSourceConfig.showValues,
          plotHighlightEffect: this.dataSourceConfig.plotHighlightEffect,
          legendAllowDrag: this.dataSourceConfig.legendAllowDrag,
          enableMultiSlicing: this.dataSourceConfig.enableMultiSlicing,
          pieRadius: this.dataSourceConfig.pieRadius,
          showPercentValues: '0',
          showPercentInTooltip: `0`,
        },
        data: this.dataSourceConfig.data
      }
    }
  }

  legendClicked(fusionChartsEvent: FusionChartsEvent) {
    // @ts-ignore
    let label = fusionChartsEvent.dataObj.label;
    // @ts-ignore
    var index = this.dataSource.data.findIndex(d => d.label === label);
    this.dataSource.data[index] = {
      ...this.dataSource.data[index],
      showLabel: '1',
      showValue: '1'
    }
  }

  selectedCurrency(currency: any) {
    const differentCurrency = currency.value > this.defaultCurrency ? currency.value / this.defaultCurrency : this.defaultCurrency / currency.value;
    this.defaultCurrency = currency.value;
    this.dataSource.chart.numberSuffix = CurrencyUtil.getCurrencyUtilByName(currency.label);
    this.dataSourceConfig?.data?.forEach(d => d.value = d.value * Math.round(differentCurrency));
    this.chartObj.setJSONData({
      chart: this.dataSource.chart,
      data: this.dataSourceConfig.data
    })
  }

  initialized($event: any){
    this.chartObj = $event.chart; // saving chart instance
   // console.log(this.chartObj);

  }
}
