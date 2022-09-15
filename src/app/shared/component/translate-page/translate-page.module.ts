import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePageComponent } from './translate-page.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";



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
    FormsModule
  ]
})
export class TranslatePageModule { }
