import { KeyLabelValueType } from "../../models/shared/key-label-value.type";
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
  constructor(public filterItem: KeyLabelValueType) {}
}

export class DeleteFilterItemAction {
  static readonly type = '[filter] DeleteFilterItemAction';
  constructor(public key: string, public filterItem: LabelValueType) {}
}

export class ClearFilterItemAction {
  static readonly type = '[filter] ClearFilterItemAction';
}
