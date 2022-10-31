import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { SetIsCollapseAction } from "../../store/sidebar/sidebar.action";
import { SidebarState } from "../../store/sidebar/sidebar.state";
import { Observable } from "rxjs";
import {HeaderDropdownActionClear} from "../../store/header-dropdown-valid/header-dropdown.action";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  store = inject(Store);
  constructor() {
    this.store.select(SidebarState.getIsCollapse).subscribe(isCollapse => this.isCollapsed = isCollapse);
  }

  ngOnInit(): void {
  }

  dropdownClick() {
    this.store.dispatch(new HeaderDropdownActionClear());
  }

  collapseChange(isCollapse: boolean) {
    // isCollapse -> true ise kapanıyor false ise açılıyor.
    this.store.dispatch(new SetIsCollapseAction(isCollapse));
  }
}
