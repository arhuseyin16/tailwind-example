import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exchange'
  },
  {
    path: 'exchange',
    loadChildren: () => import('./exchange/exchange.module').then(m => m.ExchangeModule)
  },
  {
    path: 'auth-management',
    loadChildren: () => import('./authority-management/authority-management.module').then(m => m.AuthorityManagementModule)
  },
  {
    path: 'system-document',
    loadChildren: () => import('./system-documents/system-documents.module').then(m => m.SystemDocumentsModule)
  },
  {
    path: 'system-settings',
    loadChildren: () => import('./system-settings/system-settings.module').then(m => m.SystemSettingsModule)
  },
  {
    path: 'system-tools',
    loadChildren: () => import('./system-tools/system-tools.module').then(m => m.SystemToolsModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SettingsModule { }
