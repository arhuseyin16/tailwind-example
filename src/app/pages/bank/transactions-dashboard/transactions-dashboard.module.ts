import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsDashboardComponent } from './transactions-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { TimerRefreshComponent } from './timer-refresh/timer-refresh.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import { CurrencyFlowBarComponent } from './currency-flow-bar/currency-flow-bar.component';
import { BalanceSummaryColumnComponent } from './balance-summary-column/balance-summary-column.component';
import { TranslateModule } from "@ngx-translate/core";
import { BalanceTypeComponent } from './balance-type/balance-type.component';
import { SegmentBarModule } from "../../../shared/component/segment-bar/segment-bar.module";
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { NzTableModule } from "ng-zorro-antd/table";
import { SwiperModule } from "swiper/angular";
import { CurrenciesSummariesComponent } from './currencies-summaries/currencies-summaries.component';
import { DoughnutEchartModule } from "../../../shared/component/chart/doughnut-echart/doughnut-echart.module";
import { BankService } from "../../../service/bank/bank.service";
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { AngularSvgIconModule } from "angular-svg-icon";

const routes: Routes = [
  {
    path: '',
    component: TransactionsDashboardComponent
  }
]

@NgModule({
  declarations: [
    TransactionsDashboardComponent,
    TimerRefreshComponent,
    CurrencyFlowBarComponent,
    BalanceSummaryColumnComponent,
    BalanceTypeComponent,
    BankAccountsComponent,
    CurrenciesSummariesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    NzInputNumberModule,
    NzSwitchModule,
    FormsModule,
    SegmentBarModule,
    NzTableModule,
    SwiperModule,
    DoughnutEchartModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground: true}),
    AngularSvgIconModule
  ],
  providers: [BankService]
})
export class TransactionsDashboardModule { }
