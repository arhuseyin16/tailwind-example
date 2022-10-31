import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExchangeComponent} from "./exchange.component";

const routes: Routes = [
  {
    path: '',
    component: ExchangeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
]


@NgModule({
  declarations: [ExchangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ExchangeModule { }
