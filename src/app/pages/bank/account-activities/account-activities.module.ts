import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountActivitiesComponent } from './account-activities.component';
import { AccountActivitiesDetailComponent } from './account-activities-detail/account-activities-detail.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AccountActivitiesComponent,
  },
  {
    path: 'detail',
    component: AccountActivitiesDetailComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
]

@NgModule({
  declarations: [
    AccountActivitiesComponent,
    AccountActivitiesDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountActivitiesModule { }
