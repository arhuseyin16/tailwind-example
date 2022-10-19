import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    RouterLink,
    TranslateModule
  ]
})
export class SidebarModule { }
