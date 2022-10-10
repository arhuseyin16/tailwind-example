import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Store } from "@ngxs/store";
import { SetIsCollapseAction } from "../../../store/sidebar/sidebar.action";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(
    public translateService: TranslateService,
    private store: Store
  ) {
    translateService.addLangs(['en', 'tr']);
    translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.store.dispatch(new SetIsCollapseAction(this.isCollapsed));
  }
  switchLang(lang: string) {
    this.translateService.use(lang);
  }


  changeCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.store.dispatch(new SetIsCollapseAction(this.isCollapsed));
  }
}
