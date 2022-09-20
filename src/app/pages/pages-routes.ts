import {Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'translate-dashboard',
        loadChildren: () => import('./translate-dashboard/translate-dashboard.module').then(m => m.TranslateDashboardModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ]
  }
]
