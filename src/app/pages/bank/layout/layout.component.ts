import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(
    public translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'tr']);
    translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translateService.use(lang);
  }


}
