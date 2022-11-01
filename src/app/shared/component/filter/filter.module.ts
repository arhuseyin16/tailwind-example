import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzDrawerModule } from "ng-zorro-antd/drawer";



@NgModule({
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
    imports: [
        CommonModule,
        NzPopoverModule,
        NzButtonModule,
        NzSelectModule,
        NzDrawerModule
    ]
})
export class FilterModule { }
