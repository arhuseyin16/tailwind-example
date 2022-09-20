import {Routes} from "@angular/router";

export const PagesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },{
    path: 'bank',
    loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
]
