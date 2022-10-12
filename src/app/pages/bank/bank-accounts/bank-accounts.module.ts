import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts.component';
import {RouterModule, Routes} from "@angular/router";
import {NzSelectModule} from "ng-zorro-antd/select";
import {TranslateModule} from "@ngx-translate/core";
import { BankListComponent } from './bank-list/bank-list.component';
import { BankTableComponent } from './bank-table/bank-table.component';
import { BankLineChartComponent } from './bank-list/bank-line-chart/bank-line-chart.component';
import { BankAccountDetailComponent } from './bank-account-detail/bank-account-detail.component';
import { BankAccountDetailHeaderComponent } from './bank-account-detail/bank-account-detail-header/bank-account-detail-header.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";

const routes: Routes = [
  {
    path: '',
    component: BankAccountsComponent,
  },
  {
    path: 'detail',
    component: BankAccountDetailComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
]

@NgModule({
  declarations: [
    BankAccountsComponent,
    BankListComponent,
    BankTableComponent,
    BankLineChartComponent,
    BankAccountDetailComponent,
    BankAccountDetailHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzSelectModule,
    TranslateModule,
    NzTableModule,
    NzDropDownModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormsModule
  ]
})
export class BankAccountsModule { }
