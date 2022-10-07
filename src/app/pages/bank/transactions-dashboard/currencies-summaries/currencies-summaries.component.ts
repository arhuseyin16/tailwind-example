import { Component, OnInit } from '@angular/core';
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { SegmentPositionEnum } from "../../../../shared/component/currency-bar-segment/segment-position.enum";
import { SegmentBarConfig } from "../../../../shared/component/currency-bar-segment/segment-bar.config";

@Component({
  selector: 'app-currencies-summaries',
  templateUrl: './currencies-summaries.component.html',
  styleUrls: ['./currencies-summaries.component.scss']
})
export class CurrenciesSummariesComponent implements OnInit {

  data: NzSegmentedOptions = [];

  segmentBarConfig = new SegmentBarConfig();

  constructor() {
      this.data = [
        {label: 'Döviz Toplamları', value: 1},
        {label: 'Döviz Dönüşüm', value: 2},
      ];
      this.segmentBarConfigInitialize();
  }

  ngOnInit(): void {
  }

  segmentBarConfigInitialize() {
    this.segmentBarConfig = new SegmentBarConfig();
    this.segmentBarConfig.width = '100%';
    this.segmentBarConfig.data = this.data;
    this.segmentBarConfig.block = true;
    this.segmentBarConfig.position = SegmentPositionEnum.CENTER;
    this.segmentBarConfig.paddingLeft = 60;
    this.segmentBarConfig.paddingRight = 60;
  }

}
