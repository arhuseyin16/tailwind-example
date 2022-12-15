import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeCrudComponent } from './scheme-crud.component';
import { SchemeCreateComponent } from './scheme-create/scheme-create.component';
import { SchemeListComponent } from './scheme-list/scheme-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { TranslateModule } from "@ngx-translate/core";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCustomSelectModule } from "../../../../../shared/component/nz-select/nz-custom-select.module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from "ng-zorro-antd/divider";

export const routes: Routes = [
  {
    path: '',
    component: SchemeCrudComponent
  }
]

@NgModule({
  declarations: [
    SchemeCrudComponent,
    SchemeCreateComponent,
    SchemeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NzFormModule,
    TranslateModule,
    NzInputModule,
    NzCustomSelectModule,
    NzButtonModule,
    NzDividerModule
  ]
})
export class SchemeCrudModule { }
