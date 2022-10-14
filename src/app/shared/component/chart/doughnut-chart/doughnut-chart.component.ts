import { Component, Input, OnInit } from '@angular/core';
import { FusionChartsConfig } from "../../../../models/shared/chart/fusion-charts.config";
import { ChartState } from "../../../../store/chart/chart.state";
import { Store } from "@ngxs/store";
import FusionChartsEvent from "../../../fusion-charts/interfaces/FusionChartsEvent";
import { ChartDataModel } from "../../../../models/shared/chart/chart-data.model";

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input() fusionChartsConfig: FusionChartsConfig = new FusionChartsConfig();
  chartRef: any;
  previousLegendItem?: ChartDataModel = new ChartDataModel();

  constructor(private store: Store) { }

  ngOnInit(): void {
    if (this.fusionChartsConfig) {
      this.store.select(ChartState.getChartConfig).subscribe(config => {
        if (this.chartRef && this.chartRef.id === 'chart' + this.fusionChartsConfig.data.length) {
          this.chartRef.setJSONData(config.chartConfig);
        }
      });
    }
  }

  initialized($event: any) {
    this.chartRef = $event.chart; // saving chart instance
  }

  legendClicked(fusionChartsEvent: FusionChartsEvent) {
    let virtualChartRef = Object.assign({}, this.chartRef.getJSONData());
    if (this.chartRef && this.chartRef.id === `chart-${this.fusionChartsConfig.data.length}`) {
      let updateItem: ChartDataModel;
      let previousItem: ChartDataModel;
      // @ts-ignore
      let label = fusionChartsEvent.dataObj.label;

      // @ts-ignore
      if (this.previousLegendItem.label) {
        // @ts-ignore
        if (label === this.previousLegendItem.label) {
          if (this.previousLegendItem) {
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
          const newItem = virtualChartRef.data.find((d: any) => d.label === label);
          if (newItem) {
            updateItem = {
              label: newItem.label,
              value: newItem.value,
              color: newItem.color,
              showLabel: '1',
              showValue: '1',
              isSliced: '0',
            };
          }

          if (this.previousLegendItem) {
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
        this.previousLegendItem = virtualChartRef.data.find((d: any) => d.label === label);
        if (this.previousLegendItem) {
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
      virtualChartRef.data = virtualChartRef.data.map((item: any) => {
        if (item.label === label) {
          return updateItem;
        }
        if (previousItem && item.label === previousItem.label) {
          return previousItem;
        }

        if(item.issliced) {
          item = {
            isSliced: item.issliced,
            showLabel: item.showlabel,
            showValue: item.showvalue,
            value: item.value,
            color: item.color,
            label: item.label
          }
        }
        return item;
      });
      console.log(virtualChartRef);
      this.chartRef.setJSONData(virtualChartRef);
    }
  }

}
