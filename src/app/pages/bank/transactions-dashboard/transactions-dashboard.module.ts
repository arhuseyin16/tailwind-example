import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsDashboardComponent } from './transactions-dashboard.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: TransactionsDashboardComponent
  }
]

@NgModule({
  declarations: [
    TransactionsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransactionsDashboardModule { }
