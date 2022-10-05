import {Action, Selector, State, StateContext} from "@ngxs/store";
import {HeaderConfigAction, HeaderConfigClear, HeaderConfigModel} from "./header-config.action";
import {Component, Injectable} from "@angular/core";

@State<HeaderConfigModel>({
  name: 'headerConfig',
  defaults: {
    component: null,
    data: null
  }
})

@Injectable()

export class HeaderConfigState {

  @Selector()
  static getHeaderConfig(data: HeaderConfigModel) {
    return data;
  }

  @Action(HeaderConfigAction)
  getHeaderConfig(ctx: StateContext<HeaderConfigModel>, action: HeaderConfigAction) {
    ctx.patchState({
      component: action.component,
      data: action.data
    });
  }

  @Action(HeaderConfigClear)
  getClearPrimCurrency(ctx: StateContext<HeaderConfigModel>) {
    ctx.patchState({
      component: null,
      data: null
    })
  }
}
