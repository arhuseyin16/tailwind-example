import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'schema-crud',
    loadChildren: () => import('./schema-crud/schema-crud.module').then(m => m.SchemaCrudModule)
  },
  {
    path: 'authorization-schema-edit',
    loadChildren: () => import('./authorization-schema-edit/authorization-schema-edit.module').then(m => m.AuthorizationSchemaEditModule)
  },
  {
    path: '',
    redirectTo: 'schema-crud',
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
export class AuthorizationSchemaModule { }
