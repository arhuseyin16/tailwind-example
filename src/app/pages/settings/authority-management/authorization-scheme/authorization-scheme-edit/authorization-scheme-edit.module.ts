import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationSchemeEditComponent } from './authorization-scheme-edit.component';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    component: AuthorizationSchemeEditComponent
  }
]

@NgModule({
  declarations: [
    AuthorizationSchemeEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorizationSchemeEditModule { }
