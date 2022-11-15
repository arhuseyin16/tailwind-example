import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EhoSignerComponent } from './eho-signer/eho-signer.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: 'eho-signer',
    component: EhoSignerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [
    EhoSignerComponent
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
