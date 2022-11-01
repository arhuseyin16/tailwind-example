import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExchangeComponent} from "./exchange.component";
import { ExchangeTableComponent } from './exchange-table/exchange-table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {TranslateModule} from "@ngx-translate/core";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NotificationService} from "../../../service/notification/notification.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import { ExchangeDeleteModalComponent } from './exchange-delete-modal/exchange-delete-modal.component';
import {ModalService} from "../../../service/modal-service/modal.service";
import {NzModalService} from "ng-zorro-antd/modal";

const routes: Routes = [
  {
    path: '',
    component: ExchangeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
]


@NgModule({
  declarations: [ExchangeComponent, ExchangeTableComponent, ExchangeDeleteModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    TranslateModule,
    NzInputModule,
    FormsModule,
    NzDropDownModule,
  ],
  providers: [
    NzNotificationService,
    NotificationService,
    NzModalService,
    ModalService
  ]
})
export class ExchangeModule { }
