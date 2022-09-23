import {Injectable} from "@angular/core";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable()

export class NotificationService {

  constructor(
    private notificationService: NzNotificationService) {
  }

  success(title: string, content: string, duration = 3000) {
    this.notificationService.success(title, content, {nzDuration: duration});
  }

  error(title: string, content: string, duration = 3000) {
    this.notificationService.error(title, content, {nzDuration: duration});
  }

  warning(title: string, content: string, duration = 3000) {
    this.notificationService.warning(title, content, {nzDuration: duration});
  }

  info(title: string, content: string, duration = 3000) {
    this.notificationService.info(title, content, {nzDuration: duration});
  }

}
