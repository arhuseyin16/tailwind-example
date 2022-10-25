import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { TranslatePageModule } from "../../shared/component/translate-page/translate-page.module";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { TranslateModule } from "@ngx-translate/core";
import { HeaderComponent } from './layout/header/header.component';
import {ProfileModule} from "../../shared/component/profile/profile.module";
import {PdfModule} from "../../shared/component/pdf/pdf.module";
import {FavoriteModule} from "../../shared/component/favorite/favorite.module";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {FormsModule} from "@angular/forms";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { SidebarModule } from "../../shared/component/sidebar/sidebar.module";
import { BankResolver } from "./bank.resolver";

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
      },
      {
        path: 'bank-account',
        loadChildren: () => import('./bank-accounts/bank-accounts.module').then(m => m.BankAccountsModule)
      },
      {
        path: 'account-activities',
        loadChildren: () => import('./account-activities/account-activities.module').then(m => m.AccountActivitiesModule)
      }
    ],
    resolve: {
      bank: BankResolver
    }
  }
]

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzLayoutModule,
    TranslatePageModule,
    NzMenuModule,
    NzIconModule,
    TranslateModule,
    ProfileModule,
    PdfModule,
    FavoriteModule,
    NzInputNumberModule,
    FormsModule,
    NzSwitchModule,
    SidebarModule
  ]
})
export class BankModule {
}
