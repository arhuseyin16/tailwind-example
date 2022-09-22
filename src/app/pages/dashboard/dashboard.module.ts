import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {TranslatePageModule} from "../../shared/component/translate-page/translate-page.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NotificationService} from "../../shared/service/notification.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {ProfileModule} from "../../shared/component/profile/profile.module";

const routes: Routes = [
  {
    path: '',
    // component: DashboardComponent
    component: DashboardHeaderComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzInputModule,
    TranslatePageModule,
    NzIconModule,
    NzSwitchModule,
    FormsModule,
    TranslateModule,
    ProfileModule
  ],
  providers: [
    NotificationService,
    NzNotificationService
  ]
})
export class DashboardModule { }
