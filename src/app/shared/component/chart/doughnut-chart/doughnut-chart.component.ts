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
    /*  this.store.select(ChartState.getChartConfig).subscribe(config => {
        if (this.chartRef && this.chartRef.id === 'chart' + this.fusionChartsConfig.data.length) {
          this.chartRef.setJSONData(config.chartConfig);
        }
      });*/
    }
  }

  initialized($event: any) {
    this.chartRef = $event.chart; // saving chart instance
  }

  legendClicked(fusionChartsEvent: FusionChartsEvent) {
    if (this.chartRef && this.chartRef.id === `chart-${this.fusionChartsConfig.data.length}`) {
      let virtualChartRefData = Object.assign({}, this.chartRef.getJSONData());
      let updateItem: ChartDataModel;
      let previousItem: ChartDataModel;
      // @ts-ignore
      let label = fusionChartsEvent.dataObj.label;

      // @ts-ignore
      if (this.previousLegendItem && this.previousLegendItem.label) {
        // @ts-ignore
        if (label === this.previousLegendItem.label) {
          updateItem = {
            label: this.previousLegendItem.label,
            value: this.previousLegendItem.value,
            color: this.previousLegendItem.color,
            showLabel: this.previousLegendItem.showLabel === '1' ? '0' : '1',
            showValue: this.previousLegendItem.showValue === '1' ? '0' : '1',
            isSliced: this.previousLegendItem.isSliced === '1' ? '0' : '1'
          }
        } else {
          const newItem = virtualChartRefData.data.find((d: any) => d.label === label);
          if (newItem) {
            updateItem = {
              label: newItem.label,
              value: newItem.value,
              color: newItem.color,
              showLabel: '1',
              showValue: '1',
              isSliced: '1'
            };
          }

          if (this.previousLegendItem && this.previousLegendItem.label) {
            previousItem = {
              label: this.previousLegendItem.label,
              value: this.previousLegendItem.value,
              color: this.previousLegendItem.color,
              showValue: '0',
              showLabel: '0',
              isSliced: '0'
            };
          }
        }
      } else {
        const newItem = virtualChartRefData.data.find((d: any) => d.label === label);
        if (newItem) {
          updateItem = {
            showLabel: '1',
            showValue: '1',
            isSliced: '1',
            value: newItem.value,
            color: newItem.color,
            label: newItem.label
          }
        }
      }
      // @ts-ignore
      this.previousLegendItem = updateItem;

      virtualChartRefData.data = virtualChartRefData.data.map((item: any) => {
        if (item.label === label) {
          return updateItem;
        }
        if (previousItem && item.label === previousItem.label) {
          return previousItem;
        }
        return item;
      });
      console.log(virtualChartRefData);
      this.chartRef.setJSONData(virtualChartRefData);
    }
  }

  legendItemRollOver(fusionChartsEvent: FusionChartsEvent) {
    console.log(fusionChartsEvent);
    if (this.chartRef && this.chartRef.id === `chart-${this.fusionChartsConfig.data.length}`) {
      let virtualChartRef = Object.assign({}, this.chartRef.getJSONData());
      let updateItem: ChartDataModel;
      // @ts-ignore
      let label = fusionChartsEvent.dataObj.label;

      const newItem = virtualChartRef.data.find((d: any) => d.label === label);
      if (newItem) {
        updateItem = {
          label: newItem.label,
          value: newItem.value,
          color: newItem.color,
          showLabel: '1',
          showValue: '1',
        };
        this.previousLegendItem = updateItem;
      }

      virtualChartRef.data = virtualChartRef.data.map((item: any) => {
        if (item.label === label) {
          return updateItem;
        }
        return item;
      });
      this.chartRef.setJSONData(virtualChartRef);
    }
  }

  legendItemRollOut(fusionChartsEvent: FusionChartsEvent) {
    if (this.chartRef && this.chartRef.id === `chart-${this.fusionChartsConfig.data.length}`) {
      let virtualChartRef = Object.assign({}, this.chartRef.getJSONData());
      let updateItem: ChartDataModel;
      // @ts-ignore
      let label = fusionChartsEvent.dataObj.label;

      const newItem = virtualChartRef.data.find((d: any) => d.label === label);
      if (newItem) {
        updateItem = {
          label: newItem.label,
          value: newItem.value,
          color: newItem.color,
          showLabel: '0',
          showValue: '0',
        };
      }

      virtualChartRef.data = virtualChartRef.data.map((item: any) => {
        if (item.label === label) {
          return updateItem;
        }
        return item;
      });
      this.chartRef.setJSONData(virtualChartRef);
    }
  }
}
