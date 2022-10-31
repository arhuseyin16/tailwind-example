import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Observable} from "rxjs";
import {Select} from "@ngxs/store";
import {HeaderConfigState} from "../../../store/header-config/header-config.state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  @Select(HeaderConfigState.getHeaderConfig) headerConfig$?: Observable<any>;

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.headerConfig$?.subscribe(state => {
      this.container.clear();
      if (state.data?.length > 0) {
        state.data.forEach((async (config: any) => {
          const componentInstance = await config.component();
          const componentRef = this.container.createComponent(componentInstance);
          if (config.dataObj) {
            Object.entries(config.dataObj).forEach(([key, value]) => {
              componentRef.setInput(key, value);
            });
          }
        }));
      }
    });
  }
}
