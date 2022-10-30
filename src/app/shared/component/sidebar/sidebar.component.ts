import { Component, inject, OnInit } from '@angular/core';
import { SetIsCollapseAction } from "../../../store/sidebar/sidebar.action";
import { Store } from "@ngxs/store";
import { SidebarDataModel } from "../../../models/shared/sidebar/sidebar-data.model";
import { SidebarState } from "../../../store/sidebar/sidebar.state";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  store = inject(Store);
  sidebarItems: Array<SidebarDataModel> = new Array<SidebarDataModel>();

  constructor() { }

  ngOnInit(): void {
    this.store.select(SidebarState).subscribe((state) => {
      this.sidebarItems = state.data;
      this.isCollapsed = state.isCollapse;
    });
  }

  changeCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.store.dispatch(new SetIsCollapseAction(this.isCollapsed));
  }

}
