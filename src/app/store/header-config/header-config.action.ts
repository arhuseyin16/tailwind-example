import {HeaderConfigModel} from "../../models/header-config-model";

export interface HeaderModel {
  data: Array<HeaderConfigModel>;
}

export class HeaderConfigAction {
  static readonly type = '[headerConfig] HeaderConfigAction';
  constructor(public data: Array<HeaderConfigModel>) {}
}

export class HeaderConfigClear {
  static readonly type = '[headerConfig] HeaderConfigClear';
}
