import {FusionChartsConfig} from "../../models/shared/chart/fusion-charts.config";

export interface ChartStateModel {
  chartConfig: FusionChartsConfig;
}

export class ChartConfigUpdated {
  static readonly type = '[chart] ChartConfigUpdated';
  constructor( public chartConfig: FusionChartsConfig) {
  }
}
