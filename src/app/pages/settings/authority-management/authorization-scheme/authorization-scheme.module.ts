import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'scheme-crud',
    loadChildren: () => import('./scheme-crud/scheme-crud.module').then(m => m.SchemeCrudModule)
  },
  {
    path: 'auhorization-scheme-edit',
    loadChildren: () => import('./authorization-scheme-edit/authorization-scheme-edit.module').then(m => m.AuthorizationSchemeEditModule)
  },
  {
    path: '',
    redirectTo: 'scheme-crud',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorizationSchemeModule { }
