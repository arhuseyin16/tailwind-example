import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetIsCollapseAction, SetSidebarDataAction, SidebarStateModel } from "./sidebar.action";
import { Injectable } from "@angular/core";
import { SidebarDataModel } from "../../models/shared/sidebar/sidebar-data.model";

@State<SidebarStateModel>({
  name: 'sidebar',
  defaults: {
    isCollapse: false,
    data: []
  }
})
@Injectable()
export class SidebarState {

  @Selector()
  static getIsCollapse(ctx: SidebarStateModel): boolean  {
    return ctx.isCollapse;
  }

  @Selector()
  static getSidebarData(ctx: SidebarStateModel): Array<SidebarDataModel>  {
    return ctx.data;
  }

  @Action(SetIsCollapseAction)
  setIsCollapseAction(ctx: StateContext<SidebarStateModel>, action: SetIsCollapseAction) {
    ctx.patchState({
      isCollapse: action.isCollapse
    });
  }

  @Action(SetSidebarDataAction)
  setSidebarDataAction(ctx: StateContext<SidebarStateModel>, action: SetSidebarDataAction) {
    debugger
    ctx.patchState({
      data: action.sidebarDataModel
    });
  }
}
