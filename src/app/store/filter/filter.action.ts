import { KeyValueType } from "../../models/shared/key-value.type";
import { LabelValueType } from "../../models/bank/label-value.type";

export type FilterItemModel = {
  title: string;
  key: string;
  items: Array<LabelValueType>;
}

export interface FilterStateModel {
  filterItemsCount: number;
  items: Array<FilterItemModel>;
}

export class SetFilterItemsCountAction {
  static readonly type = '[filter] SetFilterItemsCount';
  constructor(public filterItemsCount: number) {}
}

export class SetFilterItemAction {
  static readonly type = '[filter] SetFilterItemAction';
  constructor(public filterItem: KeyValueType) {}
}

export class DeleteFilterItemAction {
  static readonly type = '[filter] DeleteFilterItemAction';
  constructor(public key: string, public filterItem: LabelValueType) {}
}
