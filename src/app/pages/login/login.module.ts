import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from "@angular/router";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzInputModule } from "ng-zorro-antd/input";
import { TranslateModule } from "@ngx-translate/core";
import { NzIconModule } from "ng-zorro-antd/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzWaveModule } from "ng-zorro-antd/core/wave";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { TranslatePageModule } from "../../shared/component/translate-page/translate-page.module";
import { OtpComponent } from './otp/otp.component';
import { OnlyNumberModule } from "../../shared/directive/only-number/only-number.module";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {title: 'titles.login'}
  }
]


@NgModule({
  declarations: [
    LoginComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzCardModule,
    NzInputModule,
    TranslateModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePageModule,
    NzWaveModule,
    NzButtonModule,
    NzCheckboxModule,
    OnlyNumberModule
  ]
})
export class LoginModule {
}
