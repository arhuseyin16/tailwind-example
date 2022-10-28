import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./account-activities-list/account-activities-list.module').then(m => m.AccountActivitiesListModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./account-activities-detail/account-activities-detail.module').then(m => m.AccountActivitiesDetailModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
]

@NgModule({
  declarations: [
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class AccountActivitiesModule { }
