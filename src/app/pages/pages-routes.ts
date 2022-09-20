import {Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";

export const PagesRoutes: Routes = [
/*  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'bank',
        loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ]
  }*/
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
