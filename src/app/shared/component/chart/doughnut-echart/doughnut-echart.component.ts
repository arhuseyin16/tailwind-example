import { Component, Input } from '@angular/core';
import { EChartsOption } from "echarts";
import { CurrencyUtil } from "../../../util/currency.util";
import { CurrencyEnum } from "../../../enum/currency.enum";

@Component({
  selector: 'app-doughnut-echart',
  templateUrl: './doughnut-echart.component.html',
  styleUrls: ['./doughnut-echart.component.scss']
})
export class DoughnutEchartComponent {

  @Input() chartOption: EChartsOption = {};

  chartRef: any;

  legendSelected(event: any) {
    const selected = event.selected; // locale değişken olabilir.
    // chart legend içerisinde select alanı güncellendi.
    for (let select in selected) {
      if (event.name === select) {
        selected[select] = !selected[select];
      }
    }
      // @ts-ignore
    this.chartOption.series[0].data.forEach((data: any) => {
      if (data.name === event.name) { // seçilen legend name eşit ise
          if(data.label.show) { // label objesinin show alanı true ise
            data.label = {
              ...data.label,
              show: false
            };
            data.labelLine = {
              ...data.labelLine,
              show: false
            };
          } else {
            data.label = {
              ...data.label,
              show: true,
            };
            data.labelLine = {
              ...data.labelLine,
              show: true
            };
          }
      }
    });

    // Yeni chartOption oluşturuluyor.
    const newChartOption: EChartsOption = {
      ...this.chartOption,
      legend: {...this.chartOption.legend, selected: {...selected}}
    }
    this.chartRef.setOption(newChartOption);
  }

  chartInitialized(chartRef: any) {
    this.chartRef = chartRef;
  }
}
