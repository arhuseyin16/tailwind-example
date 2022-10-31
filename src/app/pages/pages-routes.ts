import {Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {BankResolver} from "./bank/bank.resolver";

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
      }
    ],
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'dashboard'
  // },{
  //   path: 'bank',
  //   loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  // {
  //   path: 'translate-dashboard',
  //   loadChildren: () => import('./translate-dashboard/translate-dashboard.module').then(m => m.TranslateDashboardModule)
  // }
]
