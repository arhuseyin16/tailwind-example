import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {FavoriteListAction, FavoriteListClear, FavoriteListModel} from "./favorite-list.action";

@State<FavoriteListModel>({
  name: 'favoriteList',
  defaults: {
    list: []
  }
})

@Injectable()

export class FavoriteListState {

  @Selector()
  static getFavorite(data: FavoriteListModel) {
    return data;
  }

  @Action(FavoriteListAction)
  getFavoriteConfig(ctx: StateContext<FavoriteListModel>, action: FavoriteListAction) {
    ctx.patchState({
      list: action.list
    });
  }

  @Action(FavoriteListClear)
  getClearFavorite(ctx: StateContext<FavoriteListModel>) {
    ctx.patchState({
      list: []
    });
  }
}
