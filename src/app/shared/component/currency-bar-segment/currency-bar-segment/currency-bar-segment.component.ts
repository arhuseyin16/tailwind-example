import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";

@Component({
  selector: 'app-currency-bar-segment',
  templateUrl: './currency-bar-segment.component.html',
  styleUrls: ['./currency-bar-segment.component.scss']
})
export class CurrencyBarSegmentComponent implements OnInit {

  @Input() currencies: NzSegmentedOptions = new Array<NzSegmentedOption | string | number>();

  @Input() position: string = '';

  isVertical = false;
  constructor() {

  }

  ngOnInit(): void {
    this.isVertical = this.position === 'top' || this.position === 'bottom';
  }

}
