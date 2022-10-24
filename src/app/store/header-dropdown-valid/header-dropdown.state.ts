import {HeaderDropdownAction, HeaderDropdownActionClear, HeaderDropdownModel} from "./header-dropdown.action";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";

@State<HeaderDropdownModel>({
  name: 'headerDropdown',
  defaults: {
    dashboard: false,
    favorite: false,
    pdf: false,
  }
})

@Injectable()
export class HeaderDropdownState {

  @Selector()
  static getDropdown(model: HeaderDropdownModel) {
    return model;
  }

  @Action(HeaderDropdownAction)
  sellingDataIndex(ctx: StateContext<HeaderDropdownModel>, action: HeaderDropdownAction) {
    ctx.patchState({
      dashboard: action.dashboard,
      favorite: action.favorite,
      pdf: action.pdf
    });
  }

  @Action(HeaderDropdownActionClear)
  sellingDataIndexClear(ctx: StateContext<HeaderDropdownModel>) {
    ctx.patchState({
      dashboard: false,
      favorite: false,
      pdf: false,
    });
  }
}
