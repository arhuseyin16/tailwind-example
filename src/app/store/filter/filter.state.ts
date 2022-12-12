import { Action, Selector, State, StateContext } from "@ngxs/store";
import {
  ClearFilterItemAction,
  DeleteFilterItemAction, FilterItemModel,
  FilterStateModel,
  SetFilterItemAction,
} from "./filter.action";
import { Injectable } from "@angular/core";
import { FilterUtil } from "../../shared/util/filter.util";

@State<FilterStateModel>({
  name: 'filter',
  defaults: {
    items: []
  }
})
@Injectable()
export class FilterState {

  @Selector()
  public static getFilterItemsCount(state: FilterStateModel) {
    return state.items.length;
  }

  @Selector()
  public static getFilterItems(state: FilterStateModel) {
    return state.items;
  }

  @Action(SetFilterItemAction)
  setFilterItemAction(ctx: StateContext<FilterStateModel>, action: SetFilterItemAction) {
    let stateFilterItems = ctx.getState().items;
    let mockFilterItems = [...stateFilterItems];
    if (mockFilterItems && mockFilterItems.length > 0) {
      let filterItem = mockFilterItems.find(item => item.key === action.filterItem.key);
      let index = mockFilterItems.findIndex(item => item.key === action.filterItem.key);
      mockFilterItems = mockFilterItems.filter(item => item.key !== action.filterItem.key);
      if (filterItem) {
        const findIndex = filterItem?.items?.findIndex(item => item.value === action.filterItem.value);
        if (findIndex === -1) {
          let mockItems = [...filterItem.items]
          mockItems.push({
            value: action.filterItem.value,
            label: action.filterItem.label
          });
          let mockFilterItem = {...filterItem};
          mockFilterItem.items = [...mockItems];
          filterItem = mockFilterItem;
        }
        mockFilterItems.splice(index, 0, filterItem);
      } else {
        const filterItemModel = FilterUtil.generateFilterItems(action.filterItem.key);
        filterItemModel.items?.push({
          value: action.filterItem.value,
          label: action.filterItem.label
        })
        mockFilterItems.push(filterItemModel);
      }
    } else {
      mockFilterItems = new Array<FilterItemModel>;
      const filterItemModel = FilterUtil.generateFilterItems(action.filterItem.key);
      filterItemModel.items?.push({
        value: action.filterItem.value,
        label: action.filterItem.label
      });
      mockFilterItems.push(filterItemModel);
    }
    ctx.patchState({items: mockFilterItems});
  }

  @Action(DeleteFilterItemAction)
  deleteFilterItemAction(ctx: StateContext<FilterStateModel>, action: DeleteFilterItemAction) {
    let stateItems = ctx.getState().items;
    let mockFilterItems = [...stateItems];
    let filterItem = mockFilterItems.find(item => item.key === action.key);
    let index = mockFilterItems.findIndex(item => item.key === action.key);
    mockFilterItems = mockFilterItems.filter(item => item.key !== action.key);
    if (filterItem) {
      const findIndex = filterItem?.items?.findIndex(item => item.value === action.filterItem.value);
      let mockItems = [...filterItem.items];
      findIndex !== -1 ? mockItems.splice(findIndex, 1) : null;
      let mockFilterItem = {...filterItem};
      mockFilterItem.items = [...mockItems];
      mockFilterItems.splice(index, 0, mockFilterItem);
      mockItems.length === 0 ? mockFilterItems = mockFilterItems.filter(item => item.key !== action.key) : null;
    }
    ctx.patchState({items: mockFilterItems});
  }

  @Action(ClearFilterItemAction)
  clearFilterItemAction(ctx: StateContext<FilterStateModel>)  {
    ctx.patchState({items: []});
  }
}
