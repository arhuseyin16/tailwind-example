import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyBarSegmentComponent } from './currency-bar-segment/currency-bar-segment.component';
import { NzSegmentedModule } from "ng-zorro-antd/segmented";
import { FusionChartsModule } from "../../fusion-charts/fusioncharts.module";



@NgModule({
    declarations: [
        CurrencyBarSegmentComponent
    ],
    exports: [
        CurrencyBarSegmentComponent
    ],
  imports: [
    CommonModule,
    NzSegmentedModule,
    FusionChartsModule
  ]
})
export class CurrencyBarSegmentModule { }
