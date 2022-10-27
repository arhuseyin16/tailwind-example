import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentBarComponent } from './segment-bar.component';
import { NzSegmentedModule } from "ng-zorro-antd/segmented";

@NgModule({
    declarations: [
        SegmentBarComponent
    ],
    exports: [
        SegmentBarComponent
    ],
    imports: [
        CommonModule,
        NzSegmentedModule
    ]
})
export class SegmentBarModule { }
