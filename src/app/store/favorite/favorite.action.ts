import {FavoriteStateModel} from "../../models/favorite-state.model";

export interface FavoriteModel {
  model: FavoriteStateModel;
}

export class FavoriteAction {
  static readonly type = '[favorite] FavoriteAction';
  constructor(public model: FavoriteStateModel) {}
}

export class FavoriteClear {
  static readonly type = '[favorite] FavoriteClear';
}
