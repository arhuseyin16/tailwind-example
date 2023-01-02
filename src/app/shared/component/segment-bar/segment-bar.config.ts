import { SegmentPositionEnum } from "./segment-position.enum";
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";

export class SegmentBarConfig {
  position: SegmentPositionEnum = SegmentPositionEnum.CENTER;
  block: boolean = true;
  paddingLeft: number = 0;
  paddingRight: number = 0;
  width: string = '100%';
  data: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();
  className: string = '';
}
