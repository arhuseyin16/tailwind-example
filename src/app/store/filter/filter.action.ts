export interface FilterStateModel {
  filterItemsCount: number;
}

export class SetFilterItemsCountAction {
  static readonly type = '[filter] SetFilterItemsCount';
  constructor(public filterItemsCount: number) {}
}
