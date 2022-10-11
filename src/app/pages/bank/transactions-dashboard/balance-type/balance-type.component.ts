import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/fusion-charts.config";
import FusionChartsEvent from "../../../../shared/fusion-charts/interfaces/FusionChartsEvent";
import { CurrencyUtil } from "../../../../shared/util/currency.util";
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

  dataSource: any;
  chartObj: any;
  defaultCurrency = 1;

  constructor() {

  }

  ngOnInit(): void {
    if(this.fusionChartsConfig) {
      this.dataSource = {
        chart: {
          numberPrefix: this.fusionChartsConfig.numberPrefix,
          numberSuffix: this.fusionChartsConfig.numberSuffix,
          bgColor: this.fusionChartsConfig.bgColor,
          showLegend: this.fusionChartsConfig.showLegend,
          defaultCenterLabel: this.fusionChartsConfig.defaultCenterLabel,
          centerLabel: this.fusionChartsConfig.centerLabel,
          centerLabelBold: `1`,
          decimals: this.fusionChartsConfig.decimal,
          doughnutRadius: this.fusionChartsConfig.doughnutRadius,
          theme: `fusion`,
          legendIconScale: this.fusionChartsConfig.legendIconScale,
          legendNumRows: this.fusionChartsConfig.legendNumRows,
          legendNumColumns: this.fusionChartsConfig.legendNumColumns,
          legendPosition: this.fusionChartsConfig.legendPosition,
          legendXPosition: this.fusionChartsConfig.legendXPosition,
          legendYPosition: this.fusionChartsConfig.legendYPosition,
          decimalSeparator: this.fusionChartsConfig.decimalSeparator,
          thousandSeparator: this.fusionChartsConfig.thousandSeparator,
          labelFontSize: this.fusionChartsConfig.labelFontSize,
          showLabels: this.fusionChartsConfig.showLabels,
          showValues: this.fusionChartsConfig.showValues,
          plotHighlightEffect: this.fusionChartsConfig.plotHighlightEffect,
          legendAllowDrag: this.fusionChartsConfig.legendAllowDrag,
          enableMultiSlicing: this.fusionChartsConfig.enableMultiSlicing,
          pieRadius: this.fusionChartsConfig.pieRadius,
          showPercentValues: '0',
          showPercentInTooltip: `0`,
        },
        data: this.fusionChartsConfig.data
      }
      console.log(this.dataSource);
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
    this.fusionChartsConfig?.data?.forEach(d => d.value = d.value * Math.round(differentCurrency));
    this.chartObj.setJSONData({
      chart: this.dataSource.chart,
      data: this.fusionChartsConfig.data
    })
  }

  initialized($event: any){
    this.chartObj = $event.chart; // saving chart instance
  }


}
