import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NzDropDownModule,
    RouterModule,
    TranslateModule
  ]
})
export class ProfileModule { }
