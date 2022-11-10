import { Action, Selector, State, StateContext } from "@ngxs/store";
import { FilterStateModel, SetFilterItemsCountAction } from "./filter.action";
import { Injectable } from "@angular/core";

@State<FilterStateModel>({
  name: 'filter',
  defaults: {
    filterItemsCount: 0
  }
})
@Injectable()
export class FilterState {

  @Selector()
  getFilterItemsCount(state: FilterStateModel) {
    return state.filterItemsCount;
  }

  @Action(SetFilterItemsCountAction)
  setFilterItemsCount(ctx: StateContext<FilterStateModel>, action: SetFilterItemsCountAction) {
    ctx.patchState({filterItemsCount: action.filterItemsCount});
  }
}
