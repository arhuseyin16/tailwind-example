import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {
  BankAccountDetailHeaderComponent
} from "../../bank-accounts/bank-account-detail/bank-account-detail-header/bank-account-detail-header.component";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {HeaderConfigState} from "../../../../store/header-config/header-config.state";
import {TimerRefreshComponent} from "../../transactions-dashboard/timer-refresh/timer-refresh.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;
  @Select(HeaderConfigState.getHeaderConfig) headerConfig$?: Observable<any>;
  config: any;

  constructor(
    private router: Router,
    private store: Store,
    private cdref: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.headerConfig$?.subscribe(state => {
      this.container.clear();
      console.log(state);
      if (state.component) {
        if (state.data) {
          const componentRef = this.container.createComponent(BankAccountDetailHeaderComponent);
          componentRef.instance.image = state.data.image;
          componentRef.instance.account = state.data.account;
          componentRef.instance.moneyType = state.data.moneyType;
        } else {
          this.container.createComponent(TimerRefreshComponent);
        }
        this.cdref.detectChanges();
      }
    });
  }
}
