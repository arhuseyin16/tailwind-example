import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngxs/store";
import {
  HeaderDropdownAction,
  HeaderDropdownActionClear
} from "../../../store/header-dropdown-valid/header-dropdown.action";

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss']
})
export class TranslatePageComponent implements OnInit {

  languageMeta = {
    tr: {text: "Türkçe", flagImagePath: "assets/flags/language-tr.png", short: 'TR'},
    en: {text: "English", flagImagePath: "assets/flags/language-en.png", short: 'EN'},
  } as any;

  constructor(
    public translateService: TranslateService,
    private store: Store
  ) {
    translateService.addLangs(['en', 'tr']);
  }

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    if(language === 'en') {
      this.translateService.setDefaultLang('en');
      localStorage.setItem('language', 'en');
    } else {
      this.translateService.setDefaultLang('tr');
      localStorage.setItem('language', 'tr');
    }
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.defaultLang = lang
    localStorage.setItem('language', lang);
  }

  translateClick() {
    this.store.dispatch(new HeaderDropdownActionClear());
  }
}
