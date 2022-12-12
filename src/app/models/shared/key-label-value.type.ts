import { LabelValueType } from "../bank/label-value.type";

type KeyType = {
  key: string;
}

export type KeyLabelValueType = KeyType & LabelValueType;
