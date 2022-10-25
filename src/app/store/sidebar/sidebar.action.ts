import { SidebarDataModel } from "../../models/shared/sidebar/sidebar-data.model";

export interface SidebarStateModel {
  isCollapse: boolean;
  data: Array<SidebarDataModel>;
}

export class SetIsCollapseAction {
  static readonly type = '[sidebar] SetIsCollapseAction';
  constructor(public isCollapse: boolean) {}
}

export class SetSidebarDataAction {
  static readonly type = '[sidebar] SetSidebarDataAction';
  constructor(public sidebarDataModel: Array<SidebarDataModel>) {}
}
