import {Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {BankResolver} from "./bank/bank.resolver";
import {SettingResolver} from "./settings/setting.resolver";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bank'
      },
      {
        path: 'bank',
        loadChildren: () => import('./bank/bank.module').then(m => m.BankModule),
        resolve: {
          bank: BankResolver
        }
      },
      {
        path: 'setting',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
        resolve: {
          setting: SettingResolver
        }
      }
    ],
  },
]
