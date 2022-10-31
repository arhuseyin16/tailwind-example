import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PagesRoutes } from "./pages-routes";
import {LayoutComponent} from "./layout/layout.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {SidebarModule} from "../shared/component/sidebar/sidebar.module";
import {BankModule} from "./bank/bank.module";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    RouterModule,
    FormsModule,
    NzLayoutModule,
    SidebarModule,
    BankModule,
  ]
})
export class PagesModule {
}
