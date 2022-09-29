import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/fusion-charts.config";

@Component({
  selector: 'app-currency-bar-segment',
  templateUrl: './currency-bar-segment.component.html',
  styleUrls: ['./currency-bar-segment.component.scss']
})
export class CurrencyBarSegmentComponent implements OnInit {

  @Input() dataSourceConfig?: FusionChartsConfig;

  dataSource: any;

  @Input() currencies: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();

  constructor() {

  }

  ngOnInit(): void {
    if(this.dataSourceConfig) {
      this.dataSource = {
        chart: {
          // caption: "Split of Revenue by Product Categories",
          // subCaption: "Last year",
          numberPrefix: this.dataSourceConfig.numberPrefix,
          numberSuffix: this.dataSourceConfig.numberSuffix,
          bgColor: this.dataSourceConfig.bgColor,
          showLegend: this.dataSourceConfig.showLegend,
          defaultCenterLabel: this.dataSourceConfig.defaultCenterLabel,
          centerLabel: this.dataSourceConfig.centerLabel,
          centerLabelBold: "1",
          decimals: this.dataSourceConfig.decimal,
          doughnutRadius: this.dataSourceConfig.doughnutRadius,
          theme: "fusion",
          startingAngle: "310",
          legendIconScale: this.dataSourceConfig.legendIconScale,
          legendNumRows: this.dataSourceConfig.legendNumRows,
          legendNumColumns: this.dataSourceConfig.legendNumColumns,
          legendPosition: this.dataSourceConfig.legendPosition,
          decimalSeparator: this.dataSourceConfig.decimalSeparator,
          thousandSeparator: this.dataSourceConfig.thousandSeparator,
          labelFontSize: this.dataSourceConfig.labelFontSize,
        },
        data: this.dataSourceConfig.data
      }
    }
  }

}
