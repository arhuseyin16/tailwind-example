import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePageComponent } from './translate-page.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";



@NgModule({
  declarations: [
    TranslatePageComponent
  ],
  exports: [
    TranslatePageComponent
  ],
  imports: [
    CommonModule,
    NzSelectModule,
    FormsModule,
    NzDropDownModule
  ]
})
export class TranslatePageModule { }
