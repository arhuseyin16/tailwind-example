import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  isCollapsed = true;

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
