import { Component, Input, OnInit } from '@angular/core';
import { FusionChartsConfig } from "../../../../models/shared/chart/fusion-charts.config";
import { ChartState } from "../../../../store/chart/chart.state";
import { Store } from "@ngxs/store";

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input() fusionChartsConfig: FusionChartsConfig = new FusionChartsConfig();
  chartObj: any;
  // previousLegendItem?: ChartDataModel = new ChartDataModel();
  constructor(private store: Store) { }

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

  initialized($event: any){
    this.chartObj = $event.chart; // saving chart instance
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

}
