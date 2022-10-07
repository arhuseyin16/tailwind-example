import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentBarComponent } from './segment-bar.component';
import { NzSegmentedModule } from "ng-zorro-antd/segmented";
import { FusionChartsModule } from "../../fusion-charts/fusioncharts.module";



@NgModule({
    declarations: [
        SegmentBarComponent
    ],
    exports: [
        SegmentBarComponent
    ],
    imports: [
        CommonModule,
        NzSegmentedModule,
        FusionChartsModule,
    ]
})
export class SegmentBarModule { }
