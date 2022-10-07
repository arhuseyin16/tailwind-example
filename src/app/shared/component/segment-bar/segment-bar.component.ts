import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SegmentPositionEnum } from "./segment-position.enum";
import { SegmentBarConfig } from "./segment-bar.config";

@Component({
  selector: 'app-segment-bar',
  templateUrl: './segment-bar.component.html',
  styleUrls: ['./segment-bar.component.scss']
})
export class SegmentBarComponent implements OnInit {

  @Input() segmentBarConfig: SegmentBarConfig | undefined;

  @Output() selectedSegmentEvent = new EventEmitter();

  SegmentPositionEnum = SegmentPositionEnum;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.segmentBarConfig);
  }

  changeSegmentBar(index: any) {
    if (this.segmentBarConfig) {
      this.selectedSegmentEvent.emit(this.segmentBarConfig.data[index]);
    }
  }
}
