import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {TranslateModule} from "@ngx-translate/core";
import { EnvironmentSettingsComponent } from './environment-settings/environment-settings.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzRadioModule} from "ng-zorro-antd/radio";
import { MailSettingsComponent } from './mail-settings/mail-settings.component';
import { HolidayDefinitionComponent } from './holiday-definition/holiday-definition.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NotificationService} from "../../../service/notification/notification.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalService} from "../../../service/modal-service/modal.service";
import { DbsSettingsComponent } from './dbs-settings/dbs-settings.component';
import { ErpApiSettingsComponent } from './erp-api-settings/erp-api-settings.component';
import { CurrencyIntegrationComponent } from './currency-integration/currency-integration.component';
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { LdapComponent } from './ldap/ldap.component';
import { LdapReportComponent } from './ldap/ldap-report/ldap-report.component';
import { LdapUsersComponent } from './ldap/ldap-users/ldap-users.component';
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

const routes: Routes = [
  {
    path: 'environment',
    component: EnvironmentSettingsComponent
  },
  {
    path: 'mail',
    component: MailSettingsComponent
  },
  {
    path: 'holiday',
    component: HolidayDefinitionComponent
  },
  {
    path: 'dbs',
    component: DbsSettingsComponent
  },
  {
    path: 'erp',
    component: ErpApiSettingsComponent
  },
  {
    path: 'currency-integration',
    component: CurrencyIntegrationComponent
  },
  {
    path: 'ldap',
    component: LdapComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [
    EnvironmentSettingsComponent,
    MailSettingsComponent,
    HolidayDefinitionComponent,
    DbsSettingsComponent,
    ErpApiSettingsComponent,
    CurrencyIntegrationComponent,
    LdapComponent,
    LdapReportComponent,
    LdapUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    TranslateModule,
    NzSelectModule,
    NzInputNumberModule,
    NzRadioModule,
    NzTableModule,
    NzDropDownModule,
    NzSwitchModule,
    NzPopoverModule,
    NzDatePickerModule,
  ],
  providers: [
    NzNotificationService,
    NotificationService,
    NzModalService,
    ModalService
  ]
})
export class SystemSettingsModule { }
