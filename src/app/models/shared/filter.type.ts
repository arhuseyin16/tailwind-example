import { InputType } from "./input.type";

export type FilterType = {
  title: string;
  inputTypes: Array<InputType>;
  style?: string;
  class?: string;
  order?: number
}
