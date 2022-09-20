import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDashboardComponent } from './translate-dashboard/translate-dashboard.component';
import { TranslateDashboardService } from "../../service/translate/translate-dashboard.service";
import { RouterModule, Routes } from "@angular/router";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: TranslateDashboardComponent
  }
];

@NgModule({
  declarations: [
    TranslateDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    FormsModule
  ],
  providers: [TranslateDashboardService]
})
export class TranslateDashboardModule { }
