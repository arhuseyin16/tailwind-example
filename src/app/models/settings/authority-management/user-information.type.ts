import {
  UserTypeEnum
} from "../../../pages/settings/authority-management/authorization-schema/authorization-schema-edit/user-type.enum";

export type UserInformationType = {
  username: string;
  type: UserTypeEnum;
  id: number;
  authorities: Array<number>;
  color: string;
}
