import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification/notification.service";
import {Store} from "@ngxs/store";
import {HeaderDropdownActionClear} from "../../store/header-dropdown-valid/header-dropdown.action";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() moduleList: any;

  constructor(
    private router: Router,
    private store: Store,
    private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
  }

  goToModuleUrl(url: string) {
    if (url === '/') {
      this.notificationService.warning('UYARI', 'Çok Yakında Hizmetinizde:)))', 2000);
      return;
    }
    this.router.navigate([url]);
  }

  dropdownClick() {
    this.store.dispatch(new HeaderDropdownActionClear());
  }
}
