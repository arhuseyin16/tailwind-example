import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AngularSvgIconModule } from "angular-svg-icon";
import { DrawerService } from "../../../service/drawer/drawer.service";
import { NzDrawerService } from "ng-zorro-antd/drawer";


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    RouterLink,
    TranslateModule,
    AngularSvgIconModule
  ],
  providers: [
    DrawerService,
    NzDrawerService
  ]
})
export class SidebarModule {
}
