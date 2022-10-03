import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/fusion-charts.config";
import FusionChartsEvent from "../../../../shared/fusion-charts/interfaces/FusionChartsEvent";

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


  constructor() { }

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
         // plottooltext: '<b>$label</b><br><b>$value</b>',
          showPercentValues: '0',
          showPercentInTooltip: `0`,
        },
        data: this.dataSourceConfig.data
      }
    }
  }

  legendClicked(fusionChartsEvent: FusionChartsEvent) {
    console.log(fusionChartsEvent);
    // @ts-ignore
    let label = fusionChartsEvent.dataObj.label;
    // @ts-ignore
    var index = this.dataSource.data.findIndex(d => d.label === label);
    console.log(index);
    this.dataSource.data[index] = {
      ...this.dataSource.data[index],
      showLabel: '1',
      showValue: '1'
    }
  }

  dataUpdated(fusionChartsEvent: FusionChartsEvent) {
    console.log(fusionChartsEvent);
  }
}
