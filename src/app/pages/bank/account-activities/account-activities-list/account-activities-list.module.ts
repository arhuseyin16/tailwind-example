import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivitiesListComponent } from "./account-activities-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NzIconModule } from "ng-zorro-antd/icon";

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
    NzIconModule
  ]
})
export class AccountActivitiesListModule { }
