import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/fusion-charts.config";
import FusionChartsEvent from "../../../../shared/fusion-charts/interfaces/FusionChartsEvent";
import { CurrencyUtil } from "../../../../shared/util/currency.util";
import { SegmentBarConfig } from "../../../../shared/component/segment-bar/segment-bar.config";
import {Store} from "@ngxs/store";
import {SidebarState} from "../../../../store/sidebar/sidebar.state";
import {ChartState} from "../../../../store/chart/chart.state";

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

  chartObj: any;
  defaultCurrency = 1;
  previousLegendItem = {};

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    if(this.fusionChartsConfig) {
      this.store.select(ChartState.getChartConfig).subscribe(config => {
        if(this.chartObj && this.chartObj.id === 'chart' + this.fusionChartsConfig.data.length) {
          this.chartObj.setJSONData(config.chartConfig);
        }
      });
    }
  }

  legendClicked(fusionChartsEvent: FusionChartsEvent) {
    let updateItem: any;
    let previousItem: any;
    // @ts-ignore
    let label = fusionChartsEvent.dataObj.label;
    // @ts-ignore
    if(this.previousLegendItem.label) {
      // @ts-ignore
      if(label === this.previousLegendItem.label) {
        updateItem = {
          ...this.previousLegendItem,
          showLabel: '0',
          showValue: '0',
          isSliced: '1'
        }
        delete updateItem.showLabel;
        delete updateItem.showValue;
      } else {
        const newItem = this.fusionChartsConfig.data.find(d => d.label === label);
        updateItem = {
          ...newItem,
          showLabel: '1',
          showValue: '1',
          isSliced: '0',
        };
        previousItem = {
          ...this.previousLegendItem,
          showValue: '0',
          isSliced: '1'
        };
        delete previousItem.showLabel;
        delete previousItem.showValue;
        delete previousItem.isSliced;
        this.previousLegendItem = newItem;
      }
    } else {
      this.previousLegendItem = this.fusionChartsConfig.data.find(d => d.label === label);
      updateItem = {
        ...this.previousLegendItem,
        showLabel: '1',
        showValue: '1',
        isSliced: '0',
        legendLabel: '$label'
      }
    }

    const data = this.fusionChartsConfig.data.map((item) => {
      if(item.label === label) {
        return updateItem;
      }
      if(previousItem && item.label === previousItem.label) {
        return previousItem;
      }
      return item;
    });
    console.log(data);
    this.fusionChartsConfig = {...this.fusionChartsConfig, data}
    if(this.chartObj && this.chartObj.id === `chart-${this.fusionChartsConfig.data.length}`) {
      this.chartObj.setJSONData(this.fusionChartsConfig);
    }
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

  initialized($event: any){
    this.chartObj = $event.chart; // saving chart instance
  }


}
