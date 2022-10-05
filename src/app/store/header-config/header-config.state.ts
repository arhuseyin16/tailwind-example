import {Action, Selector, State, StateContext} from "@ngxs/store";
import {HeaderConfigAction, HeaderConfigClear, HeaderModel} from "./header-config.action";
import {Injectable} from "@angular/core";

@State<HeaderModel>({
  name: 'headerConfig',
  defaults: {
    data: []
  }
})

@Injectable()

export class HeaderConfigState {

  @Selector()
  static getHeaderConfig(data: HeaderModel) {
    return data;
  }

  @Action(HeaderConfigAction)
  getHeaderConfig(ctx: StateContext<HeaderModel>, action: HeaderConfigAction) {
    ctx.patchState({
      data: action.data
    });
  }

  @Action(HeaderConfigClear)
  getClearPrimCurrency(ctx: StateContext<HeaderModel>) {
    ctx.patchState({
      data: []
    })
  }
}
