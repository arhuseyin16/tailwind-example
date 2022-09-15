import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {TranslateModule} from "@ngx-translate/core";
import {PagesRoutes} from "./pages-routes";
import {TranslatePageModule} from "../shared/component/translate-page/translate-page.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    NzLayoutModule,
    RouterModule,
    FormsModule,
    NzIconModule,
    NzMenuModule,
    TranslateModule,
    TranslatePageModule
  ]
})
export class PagesModule { }
