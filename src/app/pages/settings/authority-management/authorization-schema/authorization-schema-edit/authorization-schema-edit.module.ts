import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationSchemaEditComponent } from './authorization-schema-edit.component';
import { RouterModule, Routes } from "@angular/router";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { BankTransactionsComponent } from './bank-transactions/bank-transactions.component';
import { PosTransactionsComponent } from './pos-transactions/pos-transactions.component';
import { EPaymentComponent } from './e-payment/e-payment.component';
import { OnlineDbsComponent } from './online-dbs/online-dbs.component';
import { TranslateModule } from "@ngx-translate/core";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  AuthorityManagementService
} from "../../../../../service/settings/authority-management/authority-management.service";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzListModule } from "ng-zorro-antd/list";
import { AuthorizationModalComponent } from './authorization-modal/authorization-modal.component';
import { AngularSvgIconModule } from "angular-svg-icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCustomSelectModule } from "../../../../../shared/component/nz-select/nz-custom-select.module";

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationSchemaEditComponent
  }
]

@NgModule({
  declarations: [
    AuthorizationSchemaEditComponent,
    BankTransactionsComponent,
    PosTransactionsComponent,
    EPaymentComponent,
    OnlineDbsComponent,
    AuthorizationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTabsModule,
    TranslateModule,
    NzCheckboxModule,
    FormsModule,
    NzDividerModule,
    NzListModule,
    AngularSvgIconModule,
    NzInputModule,
    NzCustomSelectModule,
    ReactiveFormsModule
  ],
  providers: [AuthorityManagementService]
})
export class AuthorizationSchemaEditModule { }
