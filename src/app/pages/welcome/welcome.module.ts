import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  exports: []
})
export class WelcomeModule { }
