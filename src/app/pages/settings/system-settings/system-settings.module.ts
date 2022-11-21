import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EhoSignerComponent } from './eho-signer/eho-signer.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {TranslateModule} from "@ngx-translate/core";
import { EnvironmentSettingsComponent } from './environment-settings/environment-settings.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzRadioModule} from "ng-zorro-antd/radio";
import { MailSettingsComponent } from './mail-settings/mail-settings.component';

const routes: Routes = [
  {
    path: 'eho-signer',
    component: EhoSignerComponent
  },
  {
    path: 'environment',
    component: EnvironmentSettingsComponent
  },
  {
    path: 'mail',
    component: MailSettingsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [
    EhoSignerComponent,
    EnvironmentSettingsComponent,
    MailSettingsComponent
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
    ],
  providers: []
})
export class SystemSettingsModule { }
