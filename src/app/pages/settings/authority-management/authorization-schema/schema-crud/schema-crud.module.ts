import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaCrudComponent } from './schema-crud.component';
import { SchemaCreateComponent } from './schema-create/schema-create.component';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { TranslateModule } from "@ngx-translate/core";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCustomSelectModule } from "../../../../../shared/component/nz-select/nz-custom-select.module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { AuthorizationSchemaDeleteModalComponent } from './authorization-schema-delete-modal/authorization-schema-delete-modal.component';
import { AngularSvgIconModule } from "angular-svg-icon";

export const routes: Routes = [
  {
    path: '',
    component: SchemaCrudComponent
  }
]

@NgModule({
  declarations: [
    SchemaCrudComponent,
    SchemaCreateComponent,
    SchemaListComponent,
    AuthorizationSchemaDeleteModalComponent
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
    NzDividerModule,
    AngularSvgIconModule
  ]
})
export class SchemaCrudModule { }
