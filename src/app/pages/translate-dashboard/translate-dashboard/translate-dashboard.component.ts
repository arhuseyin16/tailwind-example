import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateDashboardService } from "../../../service/translate/translate-dashboard.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-translate-dashboard',
  templateUrl: './translate-dashboard.component.html',
  styleUrls: ['./translate-dashboard.component.scss'],
})
export class TranslateDashboardComponent implements OnInit, OnDestroy {

  translates: Array<any> = [];
  translatesTr: Array<any> = [];
  globalTranslates: Array<any> = [];
  globalTranslatesOfDisplay: Array<any> = [];
  keys: Array<string> = [];
  isKeyObject = false;

  searchValue = '';
  visible = false;

  constructor(private translateDashboardService: TranslateDashboardService,
              private changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.translateDashboardService.getLanguageFile('assets/i18n/en.json').pipe(untilDestroyed(this)).subscribe(enObject => {
      this.translates = this.generateTranslateModel(enObject);
      this.translateDashboardService.getLanguageFile('assets/i18n/tr.json').pipe(untilDestroyed(this)).subscribe(trObject => {
        this.keys = []
        this.translatesTr = this.generateTranslateModel(trObject);
        this.translates.forEach(t => {
          let trnslt = this.translatesTr.find(tr => tr.key === t.key);
          this.globalTranslates.push({
            key: t.key,
            enValue: t.value,
            trValue: trnslt ? trnslt.value : ''
          });
        });
        console.log(this.globalTranslates);
        this.globalTranslatesOfDisplay = [...this.globalTranslates];
      });
    });

  }

  generateTranslateModel(object: any, models?: Array<any>) {
    let translateModel = models && models?.length > 0 ? models : [];
    Object.keys(object).forEach(key => {
      if (typeof object[key] === "object") {
        this.keys.push(key);
        const childObjectKeys = object[key];
        Object.keys(childObjectKeys).forEach(k => {
          if (typeof childObjectKeys[k] === "object") {
            this.isKeyObject = true;
            return;
          } else {
            translateModel.push({
              key: this.keys.join('.') + '.' + k,
              value: childObjectKeys[k]
            });
            delete childObjectKeys[k];
          }
        });
        if (this.isKeyObject) {
          this.generateTranslateModel(childObjectKeys, translateModel);
        } else {
          const t = this.keys.join('.');
          translateModel.push({
            key: t,
            value: childObjectKeys
          });
          this.keys = [];
          this.isKeyObject = false;
        }
      } else {
        translateModel.push({
          key,
          value: object[key]
        });
      }
    });
    return translateModel;
  }

  ngOnDestroy() {}

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.globalTranslatesOfDisplay = this.globalTranslates.filter((item: any) => item.key.indexOf(this.searchValue) !== -1);
  }

}
