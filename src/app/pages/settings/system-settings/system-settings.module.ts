import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EhoSignerComponent } from './eho-signer/eho-signer.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {TranslateModule} from "@ngx-translate/core";
import { EnvironmentSettingsComponent } from './environment-settings/environment-settings.component';

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
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [
    EhoSignerComponent,
    EnvironmentSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    TranslateModule,
  ],
  providers: []
})
export class SystemSettingsModule { }
