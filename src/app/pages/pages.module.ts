import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PagesRoutes } from "./pages-routes";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    RouterModule,
    FormsModule,
  ]
})
export class PagesModule {
}
