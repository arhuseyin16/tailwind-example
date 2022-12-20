import { PageInformationType } from "./page-information.type";

export type UserInformationType = {
  username: string;
  type: UserInformationType;
  pageInformations: Array<PageInformationType>;
}
