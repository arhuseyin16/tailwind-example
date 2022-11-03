import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivitiesListComponent } from "./account-activities-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { BankService } from "../../../../service/bank/bank.service";
import { NzInputModule } from "ng-zorro-antd/input";
import {
  AccountActivitiesListFilterComponent
} from "./account-activities-list-filter/account-activities-list-filter.component";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzCustomSelectModule } from "../../../../shared/component/nz-select/nz-custom-select.module";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";

const routes: Routes = [
  {
    path: '',
    component: AccountActivitiesListComponent
  }
]

@NgModule({
  declarations: [AccountActivitiesListComponent, AccountActivitiesListFilterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzSelectModule,
        FormsModule,
        TranslateModule,
        NzIconModule,
        NzButtonModule,
        NzInputModule,
        NzPopoverModule,
        NzDrawerModule,
        NzCustomSelectModule,
        ReactiveFormsModule,
        NzDatePickerModule,
        NzTimePickerModule,
        NzInputNumberModule,
    ],
  providers: [
    BankService
  ]
})
export class AccountActivitiesListModule {
}
