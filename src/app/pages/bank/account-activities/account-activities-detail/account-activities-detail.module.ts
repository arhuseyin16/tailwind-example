import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivitiesDetailComponent } from "./account-activities-detail.component";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: AccountActivitiesDetailComponent
  }
]

@NgModule({
  declarations: [AccountActivitiesDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class AccountActivitiesDetailModule { }
