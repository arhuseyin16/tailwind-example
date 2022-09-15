import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss']
})
export class TranslatePageComponent implements OnInit {

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
