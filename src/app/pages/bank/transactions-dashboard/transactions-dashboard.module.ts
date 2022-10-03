import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsDashboardComponent } from './transactions-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { CurrencyFlowBarComponent } from './currency-flow-bar/currency-flow-bar.component';
import { BalanceSummaryColumnComponent } from './balance-summary-column/balance-summary-column.component';
import { TranslateModule } from "@ngx-translate/core";
import { BalanceTypeComponent } from './balance-type/balance-type.component';
import { CurrencyBarSegmentModule } from "../../../shared/component/currency-bar-segment/currency-bar-segment.module";
import { FusionChartsModule } from "../../../shared/fusion-charts/fusioncharts.module";

const routes: Routes = [
  {
    path: '',
    component: TransactionsDashboardComponent
  }
]

@NgModule({
  declarations: [
    TransactionsDashboardComponent,
    CurrencyFlowBarComponent,
    BalanceSummaryColumnComponent,
    BalanceTypeComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
        CurrencyBarSegmentModule,
        FusionChartsModule,
    ]
})
export class TransactionsDashboardModule {
}
