import {FavoriteListStateModel} from "../../models/favorite-state.model";

export interface FavoriteListModel {
  list: Array<FavoriteListStateModel>;
}

export class FavoriteListAction {
  static readonly type = '[favoriteList] FavoriteListAction';
  constructor(public list: Array<FavoriteListStateModel>) {}
}

export class FavoriteListClear {
  static readonly type = '[favoriteList] FavoriteListClear';
}
