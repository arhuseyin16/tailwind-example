import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FavoriteAction, FavoriteClear, FavoriteModel} from "./favorite.action";
import {Injectable} from "@angular/core";

@State<FavoriteModel>({
  name: 'favorite',
  defaults: {
    model: {}
  }
})

@Injectable()

export class FavoriteState {

  @Selector()
  static getFavorite(data: FavoriteModel) {
    return data;
  }

  @Action(FavoriteAction)
  getFavoriteConfig(ctx: StateContext<FavoriteModel>, action: FavoriteAction) {
    ctx.patchState({
      model: action.model
    });
  }

  @Action(FavoriteClear)
  getClearFavorite(ctx: StateContext<FavoriteModel>) {
    ctx.patchState({
      model: {}
    });
  }
}
