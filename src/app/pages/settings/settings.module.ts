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
