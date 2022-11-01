import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivitiesListComponent } from "./account-activities-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { BankService } from "../../../../service/bank/bank.service";
import { NzInputModule } from "ng-zorro-antd/input";
import { FilterModule } from "../../../../shared/component/filter/filter.module";

const routes: Routes = [
  {
    path: '',
    component: AccountActivitiesListComponent
  }
]

@NgModule({
  declarations: [AccountActivitiesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzSelectModule,
    FormsModule,
    TranslateModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    FilterModule,
  ],
  providers: [
    BankService
  ]
})
export class AccountActivitiesListModule {
}
