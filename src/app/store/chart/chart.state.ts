import {ChartConfigUpdated, ChartStateModel} from "./chart.action";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FusionChartsConfig} from "../../models/shared/fusion-charts.config";
import {Injectable} from "@angular/core";

@State<ChartStateModel> ({
   name: 'chart',
  defaults: {
     chartConfig: new FusionChartsConfig()
  }
})
@Injectable()
export class ChartState {

  @Selector()
  static getChartConfig(chartConfig: ChartStateModel) {
    return chartConfig;
  }

  @Action(ChartConfigUpdated)
  chartConfigUpdated(ctx: StateContext<ChartStateModel>, action: ChartConfigUpdated) {
    ctx.patchState({
      chartConfig: action.chartConfig,
    })
  }
}
