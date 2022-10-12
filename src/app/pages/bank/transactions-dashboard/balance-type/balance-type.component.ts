import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../../models/shared/chart/fusion-charts.config";
import { SegmentBarConfig } from "../../../../shared/component/segment-bar/segment-bar.config";
import {Store} from "@ngxs/store";
import {ChartState} from "../../../../store/chart/chart.state";
import { ChartDataModel } from "../../../../models/shared/chart/chart-data.model";

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
 // previousLegendItem?: ChartDataModel = new ChartDataModel();

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    if(this.fusionChartsConfig) {
      this.store.select(ChartState.getChartConfig).subscribe(config => {
        if(this.chartObj && this.chartObj.id === 'chart' + this.fusionChartsConfig.data.length) {
          this.chartObj.setJSONData(config.chartConfig);
        }
      });
      console.log(this.fusionChartsConfig);
    }
  }
/*  legendClicked(fusionChartsEvent: FusionChartsEvent) {
    if(this.chartObj && this.chartObj.id === `chart-${this.fusionChartsConfig.data.length}`) {

      let updateItem: ChartDataModel;
    let previousItem: ChartDataModel;
    // @ts-ignore
    let label = fusionChartsEvent.dataObj.label;

      // @ts-ignore
    if(this.previousLegendItem.label) {
      // @ts-ignore
      if(label === this.previousLegendItem.label) {
        if(this.previousLegendItem) {
          updateItem = {
            label: this.previousLegendItem.label,
            value: this.previousLegendItem.value,
            color: this.previousLegendItem.color,
            showLabel: '0',
            showValue: '0',
            isSliced: '1'
          }
        }

      } else {
        const newItem  = this.fusionChartsConfig.data.find(d => d.label === label);
        if(newItem) {
          updateItem = {
            label: newItem.label,
            value: newItem.value,
            color: newItem.color,
            showLabel: '1',
            showValue: '1',
            isSliced: '0',
          };
        }

        if(this.previousLegendItem) {
          previousItem = {
            label: this.previousLegendItem.label,
            value: this.previousLegendItem.value,
            color: this.previousLegendItem.color,
            showValue: '0',
            showLabel: '0',
            isSliced: '1'
          };
        }

        this.previousLegendItem = newItem;
      }
    } else {
      this.previousLegendItem = this.fusionChartsConfig.data.find(d => d.label === label);
      if(this.previousLegendItem) {
        updateItem = {
          isSliced: '0',
          showLabel: '1',
          showValue: '1',
          value: this.previousLegendItem.value,
          color: this.previousLegendItem.color,
          label: this.previousLegendItem.label
        }
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
    this.fusionChartsConfig = {...this.fusionChartsConfig, data}
      this.chartObj.setJSONData(this.fusionChartsConfig);
    }
  }*/

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
