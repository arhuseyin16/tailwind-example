import { Component, Input, OnInit } from '@angular/core';
import { FilterType } from "../../../models/shared/filter.type";
import { InputTypeEnum } from "../../enum/input-type.enum";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  visible: boolean = false;

  visibleDrawer = false;
  @Input() filterTypes?: Array<FilterType>;
  InputTypeEnum = InputTypeEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickMe(): void {
    this.visible = !this.visible;
    console.log(this.visible);
  }

  close(): void {
    this.visible = false;
  }

}
