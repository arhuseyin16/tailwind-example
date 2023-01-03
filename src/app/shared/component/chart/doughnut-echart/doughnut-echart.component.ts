import { Component, Input } from '@angular/core';
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-doughnut-echart',
  templateUrl: './doughnut-echart.component.html',
  styleUrls: ['./doughnut-echart.component.scss'],
})
export class DoughnutEchartComponent {

  @Input() chartOption: EChartsOption = {};

  chartRef: any;

  legendSelected(event: any) {
    const selected = event.selected;
    for (let select in selected) {
      if (event.name === select) {
        selected[select] = !selected[select];     // chart legend içerisinde select alanı güncellendi.
      }
    }

    // @ts-ignore
    this.chartOption.series[1].data.forEach((data: any) => {
      if (data.name === event.name) { // seçilen legend name eşit ise
        data.label = {
          ...data.label,
          show: !data.label.show
        };
        data.labelLine = {
          ...data.labelLine,
          show: data.label.show
        };
      } else {
        data.label = {
          ...data.label,
          show: false
        };
        data.labelLine = {
          ...data.labelLine,
          show: false
        };
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
    console.log(this.chartRef);
  }

  resizeChart() {
    if (this.chartRef) {
      this.chartRef.resize();
    }
  }
}
