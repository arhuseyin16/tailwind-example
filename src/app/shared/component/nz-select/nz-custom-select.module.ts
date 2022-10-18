import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectComponent } from './nz-select.component';
import {TranslateModule} from "@ngx-translate/core";
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";



@NgModule({
  declarations: [
    NzSelectComponent
  ],
  exports: [
    NzSelectComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NzCheckboxModule,
  ]
})
export class NzCustomSelectModule { }
