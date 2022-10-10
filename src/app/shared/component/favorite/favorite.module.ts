import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import {TranslateModule} from "@ngx-translate/core";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  exports: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzSwitchModule,
    FormsModule
  ]
})
export class FavoriteModule { }
