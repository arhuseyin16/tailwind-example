import {ChartConfig} from "./chart.config";
import { ChartDataModel } from "./chart-data.model";

export class FusionChartsConfig {
  data: Array<ChartDataModel> = new Array<ChartDataModel>();
  chart: ChartConfig = new ChartConfig();
}


