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
import {TranslateModule} from "@ngx-translate/core";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileAuthComponent } from './profile-auth/profile-auth.component';
import { GroupComponent } from './group/group.component';
import { BankProcessComponent } from './bank-process/bank-process.component';
import { PosProcessComponent } from './pos-process/pos-process.component';
import { OnlineDbsComponent } from './online-dbs/online-dbs.component';
import { EPaymentComponent } from './e-payment/e-payment.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent
  }
]


@NgModule({
  declarations: [
    ProfileSettingsComponent,
    ProfileSettingsHeaderComponent,
    ProfileAuthComponent,
    GroupComponent,
    BankProcessComponent,
    PosProcessComponent,
    OnlineDbsComponent,
    EPaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PdfModule,
    FavoriteModule,
    TranslatePageModule,
    ProfileModule,
    TranslateModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    NotificationService,
    NzNotificationService
  ]
})
export class ProfileSettingsModule { }
