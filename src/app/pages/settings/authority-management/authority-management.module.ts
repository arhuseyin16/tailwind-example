import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {TranslateModule} from "@ngx-translate/core";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupTableComponent } from './user-group/user-group-table/user-group-table.component';
import { UserGroupNewRecordModalComponent } from './user-group/user-group-new-record-modal/user-group-new-record-modal.component';
import {ModalService} from "../../../service/modal-service/modal.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NotificationService} from "../../../service/notification/notification.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import { UserGroupDeleteModalComponent } from './user-group/user-group-delete-modal/user-group-delete-modal.component';
import { UserGroupEditModalComponent } from './user-group/user-group-edit-modal/user-group-edit-modal.component';

const routes: Routes = [
  {
    path: 'user-group',
    component: UserGroupComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
]


@NgModule({
  declarations: [
    UserGroupComponent,
    UserGroupTableComponent,
    UserGroupNewRecordModalComponent,
    UserGroupDeleteModalComponent,
    UserGroupEditModalComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NzPopoverModule,
        TranslateModule,
        NzSelectModule,
        NzInputModule,
        ReactiveFormsModule,
        NzMenuModule,
        NzDropDownModule,
        NzTableModule,
        FormsModule
    ],
  providers: [
    ModalService,
    NzModalService,
    NotificationService,
    NzNotificationService
  ]
})
export class AuthorityManagementModule { }
