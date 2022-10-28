import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { SegmentBarConfig } from "../../../../shared/component/segment-bar/segment-bar.config";
import { EChartsOption } from "echarts";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-balance-type',
  templateUrl: './balance-type.component.html',
  styleUrls: ['./balance-type.component.scss']
})
export class BalanceTypeComponent implements OnInit {

  @Input() title = '';
  @Input() segmentBarConfig: SegmentBarConfig | undefined;
  @Input() chartsOption?: EChartsOption;

  @Output() currencyChange = new EventEmitter();

  ngOnInit(): void {
  }

  selectedCurrency(currency: any) {
    this.currencyChange.emit(currency.label);
  }




}
