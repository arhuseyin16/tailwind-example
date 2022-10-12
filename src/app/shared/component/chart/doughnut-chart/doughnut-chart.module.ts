import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent } from './doughnut-chart.component';
import { FusionChartsModule } from "../../../fusion-charts/fusioncharts.module";



@NgModule({
  declarations: [
    DoughnutChartComponent
  ],
  exports: [
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    FusionChartsModule
  ]
})
export class DoughnutChartModule { }
