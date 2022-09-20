import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankTransactionsDashboardComponent } from './bank-transactions-dashboard.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: BankTransactionsDashboardComponent
  }
]

@NgModule({
  declarations: [
    BankTransactionsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BankTransactionsDashboardModule { }
