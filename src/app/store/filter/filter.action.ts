import { KeyValueType } from "../../models/shared/key-value.type";
import { LabelValueType } from "../../models/bank/label-value.type";

export type FilterItemModel = {
  title: string;
  key: string;
  items: Array<LabelValueType>;
}

export interface FilterStateModel {
  items: Array<FilterItemModel>;
}

export class SetFilterItemAction {
  static readonly type = '[filter] SetFilterItemAction';
  constructor(public filterItem: KeyValueType) {}
}

export class DeleteFilterItemAction {
  static readonly type = '[filter] DeleteFilterItemAction';
  constructor(public key: string, public filterItem: LabelValueType) {}
}

export class ClearFilterItemAction {
  static readonly type = '[filter] ClearFilterItemAction';
}
