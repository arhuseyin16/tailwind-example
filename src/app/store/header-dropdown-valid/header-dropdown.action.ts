export interface HeaderDropdownModel {
  dashboard: boolean;
  favorite: boolean;
  pdf: boolean;
}

export class HeaderDropdownAction {
  static readonly type = '[HeaderDropdown] HeaderDropdownAction';
  constructor(public dashboard: boolean,
              public favorite: boolean,
              public pdf: boolean) {
  }
}

export class HeaderDropdownActionClear {
  static readonly type = '[HeaderDropdown] HeaderDropdownActionClear';
}
