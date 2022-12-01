import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemDocumentsComponent } from './system-documents.component';
import {RouterModule, Routes} from "@angular/router";
import { SystemDocumentTableComponent } from './system-document-table/system-document-table.component';
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {TranslateModule} from "@ngx-translate/core";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";

const routes: Routes = [
  {
    path: '',
    component: SystemDocumentsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
]



@NgModule({
  declarations: [
    SystemDocumentsComponent,
    SystemDocumentTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzPopoverModule,
    TranslateModule,
    NzSelectModule,
    NzInputModule,
    ReactiveFormsModule,
    NzTableModule
  ],
  providers: []
})
export class SystemDocumentsModule { }
