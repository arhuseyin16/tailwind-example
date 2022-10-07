import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SegmentPositionEnum } from "../segment-position.enum";
import { SegmentBarConfig } from "../segment-bar.config";

@Component({
  selector: 'app-currency-bar-segment',
  templateUrl: './currency-bar-segment.component.html',
  styleUrls: ['./currency-bar-segment.component.scss']
})
export class CurrencyBarSegmentComponent implements OnInit {

  @Input() segmentBarConfig: SegmentBarConfig | undefined;

  @Output() selectedCurrencyEvent = new EventEmitter();

  SegmentPositionEnum = SegmentPositionEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeCurrencyBar(index: any) {
    if (this.segmentBarConfig) {
      this.selectedCurrencyEvent.emit(this.segmentBarConfig.data[index]);
    }
  }
}
