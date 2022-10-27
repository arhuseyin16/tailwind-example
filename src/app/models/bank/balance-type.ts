import { NameValueType } from "./name-value.type";

export interface BalanceType {
  label: string;
  accounts: Array<NameValueType>;
  color: string;
  value?: string;
}
