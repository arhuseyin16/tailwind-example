import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { TranslatePageModule } from "../../shared/component/translate-page/translate-page.module";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { TranslateModule } from "@ngx-translate/core";

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
        loadChildren: () => import('./transactions-dashboard/transactions-dashboard.module').then(m => m.TransactionsDashboardModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzLayoutModule,
    TranslatePageModule,
    NzMenuModule,
    NzIconModule,
    TranslateModule
  ]
})
export class BankModule {
}
