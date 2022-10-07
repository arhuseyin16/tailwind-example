import { SegmentPositionEnum } from "./segment-position.enum";
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";

export class SegmentBarConfig {
  position: SegmentPositionEnum = SegmentPositionEnum.CENTER;
  block: boolean = false;
  paddingLeft: number = 0;
  paddingRight: number = 0;
  width: string = 'auto';
  data: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();
}
