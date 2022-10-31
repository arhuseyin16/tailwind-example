import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {HeaderConfigClear} from "../../../store/header-config/header-config.action";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  constructor(private store: Store) {
    this.store.dispatch(new HeaderConfigClear());
  }

  ngOnInit(): void {
  }

}
