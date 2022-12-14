import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemToolsComponent } from './system-tools.component';
import { RouterModule, Routes } from "@angular/router";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { TranslateModule } from "@ngx-translate/core";

export const routes: Routes = [
  {
    path: '',
    component: SystemToolsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    SystemToolsComponent
  ],
  imports: [
    CommonModule,
    NzDividerModule,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class SystemToolsModule { }
