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
import { NzDrawerModule, NzDrawerService } from "ng-zorro-antd/drawer";
import { NzCustomSelectModule } from "../../../../shared/component/nz-select/nz-custom-select.module";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import {
  AccountActivitiesFilterShareComponent
} from './account-activities-filter-share/account-activities-filter-share.component';
import { NzModalService } from "ng-zorro-antd/modal";
import { ModalService } from "../../../../service/modal/modal.service";
import { DrawerService } from "../../../../service/drawer/drawer.service";
import {
  AccountActivitiesListTableComponent
} from './account-activities-list-table/account-activities-list-table.component';
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NzListModule } from "ng-zorro-antd/list";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzResizableModule } from "ng-zorro-antd/resizable";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PrintReceiptModalComponent } from "./print-receipt-modal/print-receipt-modal.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { SelectDeleteRecordModalComponent } from './select-delete-record-modal/select-delete-record-modal.component';
import { EditUserDescriptionComponent } from './edit-user-description/edit-user-description.component';
import { CreateFavoriteFilterComponent } from './create-favorite-filter/create-favorite-filter.component';

const routes: Routes = [
  {
    path: '',
    component: AccountActivitiesListComponent
  }
]

@NgModule({
  declarations: [AccountActivitiesListComponent, PrintReceiptModalComponent,
    AccountActivitiesListFilterComponent, AccountActivitiesFilterShareComponent, AccountActivitiesListTableComponent, SelectDeleteRecordModalComponent, EditUserDescriptionComponent, CreateFavoriteFilterComponent],
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
    NzFormModule,
    NzBadgeModule,
    NzTableModule,
    NzDropDownModule,
    ScrollingModule,
    NzListModule,
    NzCheckboxModule,
    NzResizableModule,
    DragDropModule,
    AngularSvgIconModule,

  ],
  providers: [
    BankService,
    ModalService,
    NzModalService,
    DrawerService,
    NzDrawerService
  ]
})
export class AccountActivitiesListModule {
}
