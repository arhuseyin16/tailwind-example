export class FavoriteStateModel {
  name?: string;
  url?: string;
}

export class FavoriteListStateModel extends FavoriteStateModel{
  status?: boolean;
}
