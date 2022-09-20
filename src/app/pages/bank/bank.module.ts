import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'transactions-dashboard'
      },
      {
        path: 'transactions-dashboard',
        loadChildren: () => import('./bank-transactions-dashboard/bank-transactions-dashboard.module').then(m => m.BankTransactionsDashboardModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BankModule {
}
