import { UserAuthorityType } from "./user-authority.type";
import { UserInformationType } from "./user-information.type";

export type PageInformationType = {
  id: number;
  title: string;
  authorities: Array<UserAuthorityType>;
  groups: Array<UserInformationType>;
  individuals: Array<UserInformationType>;
}
