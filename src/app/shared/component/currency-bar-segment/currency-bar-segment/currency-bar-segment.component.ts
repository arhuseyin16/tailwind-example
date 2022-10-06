import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";

@Component({
  selector: 'app-currency-bar-segment',
  templateUrl: './currency-bar-segment.component.html',
  styleUrls: ['./currency-bar-segment.component.scss']
})
export class CurrencyBarSegmentComponent implements OnInit {

  @Input() segments: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();

  @Input() position: string = '';

  @Output() selectedCurrencyEvent = new EventEmitter();

  isVertical = false;
  selectedCurrency: any;
  constructor() {

  }

  ngOnInit(): void {
    this.isVertical = this.position === 'top' || this.position === 'bottom';
  }

  changeCurrencyBar(index: any) {
    this.selectedCurrencyEvent.emit(this.segments[index]);
  }
}
