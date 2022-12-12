import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import {RouterModule, Routes} from "@angular/router";
import {NotificationService} from "../../service/notification/notification.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import { ProfileSettingsHeaderComponent } from './profile-settings-header/profile-settings-header.component';
import {PdfModule} from "../../shared/component/pdf/pdf.module";
import {FavoriteModule} from "../../shared/component/favorite/favorite.module";
import {TranslatePageModule} from "../../shared/component/translate-page/translate-page.module";
import {ProfileModule} from "../../shared/component/profile/profile.module";

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent
  }
]


@NgModule({
  declarations: [
    ProfileSettingsComponent,
    ProfileSettingsHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PdfModule,
    FavoriteModule,
    TranslatePageModule,
    ProfileModule
  ],
  providers: [
    NotificationService,
    NzNotificationService
  ]
})
export class ProfileSettingsModule { }
