import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutEchartComponent } from "./doughnut-echart.component";
import { NgxEchartsModule } from "ngx-echarts";



@NgModule({
  declarations: [
    DoughnutEchartComponent
  ],
  exports: [
    DoughnutEchartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ]
})
export class DoughnutEchartModule { }
