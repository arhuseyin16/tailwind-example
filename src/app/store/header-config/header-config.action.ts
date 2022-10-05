import {Component} from "@angular/core";

export interface HeaderConfigModel {
  component: any,
  data: any
}

export class HeaderConfigAction {
  static readonly type = '[headerConfig] HeaderConfigAction';
  constructor(public component: any,
              public data: any) {}
}

export class HeaderConfigClear {
  static readonly type = '[headerConfig] HeaderConfigClear';
}
