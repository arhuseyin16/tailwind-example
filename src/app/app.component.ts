import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(
    public translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'tr']);
    translateService.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
  }
}
