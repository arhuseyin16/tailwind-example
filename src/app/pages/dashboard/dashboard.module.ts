import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {TranslatePageModule} from "../../shared/component/translate-page/translate-page.module";
import {NzIconModule} from "ng-zorro-antd/icon";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzInputModule,
        TranslatePageModule,
        NzIconModule
    ]
})
export class DashboardModule { }
