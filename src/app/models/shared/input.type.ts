import { InputTypeEnum } from "../../shared/enum/input-type.enum";
import { LabelValueType } from "../bank/label-value.type";

export type InputType = {
  type: InputTypeEnum;
  defaultValue: unknown;
  placeholder?: string;
  style?: string;
  class?: string;
  data: Array<LabelValueType>
}
