import { PageInformationType } from "./page-information.type";

export type PageAuthorityType = {
  id: number;
  title: string;
  pageInformations: Array<PageInformationType>;

}
