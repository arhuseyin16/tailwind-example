import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification/notification.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() moduleList: any;

  constructor(
    private router: Router,
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

}
