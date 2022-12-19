import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationSchemaEditComponent } from './authorization-schema-edit.component';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationSchemaEditComponent
  }
]

@NgModule({
  declarations: [
    AuthorizationSchemaEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorizationSchemaEditModule { }
