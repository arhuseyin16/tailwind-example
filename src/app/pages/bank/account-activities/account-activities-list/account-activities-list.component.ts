import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { FavoriteStateModel } from "../../../../models/favorite-state.model";
import { HeaderConfigClear } from "../../../../store/header-config/header-config.action";
import { FavoriteAction } from "../../../../store/favorite/favorite.action";
import { BankService } from "../../../../service/bank/bank.service";
import { forkJoin } from "rxjs";
import { NzSelectOptionInterface } from "ng-zorro-antd/select";
import { FilterType } from "../../../../models/shared/filter.type";
import { InputTypeEnum } from "../../../../shared/enum/input-type.enum";

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities-list.component.html',
  styleUrls: ['./account-activities-list.component.scss']
})
export class AccountActivitiesListComponent implements OnInit {
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  bankService = inject(BankService);
  favoriteFilters?: NzSelectOptionInterface[];
  dateFilters?: NzSelectOptionInterface[];

  allFiltersModel?: Array<FilterType>;

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.store.dispatch(new HeaderConfigClear()); // header sol taraf boş headerConfig state Clear methot'u çagırmamız yeterli
    this.favoriteModel = {
      name: 'favorite-list.account-activities',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
    const observables = forkJoin([
      this.bankService.getFavoriteFilters(),
      this.bankService.getDateFilters()
    ]);

    observables.subscribe(observer => {
      this.favoriteFilters = observer[0] as NzSelectOptionInterface[];
      this.dateFilters = observer[1] as NzSelectOptionInterface[];
    });

    this.generateFilterType();
  }

  detail() {
    this.router.navigate(['ui/bank/account-activities/detail'], {queryParams: {id: 1}});
  }

  generateFilterType() {
    this.allFiltersModel = new Array<FilterType>();
    this.allFiltersModel.push(
      {
        title: 'Hesaplar',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'Hesap 1',
                value: "1"
              },
              {
                label: 'Hesap 2',
                value: "2"
              }
            ]
          }
        ]
      },
      {
        title: 'İşlem Türleri',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'İşlem Türü 1',
                value: "1"
              },
              {
                label: 'İşlem Türü 2',
                value: "2"
              }
            ]
          }
        ]
      },
      {
        title: 'Belge Grubu',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'Belge Grubu 1',
                value: "1"
              },
              {
                label: 'Belge Grubu 2',
                value: "2"
              }
            ]
          }
        ]
      },
      {
        title: 'Belge Tipi',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'Belge Tipi 1',
                value: "1"
              },
              {
                label: 'Belge Tipi 2',
                value: "2"
              }
            ]
          }
        ]
      },
      {
        title: 'Tip Dönüştürme',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'Tip Dönüştürme 1',
                value: "1"
              },
              {
                label: 'Tip Dönüştürme 2',
                value: "2"
              }
            ]
          }
        ]
      },
      {
        title: 'Dönüşüm Tipi',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'Dönüşüm Tipi 1',
                value: "1"
              },
              {
                label: 'Dönüşüm Tipi 2',
                value: "2"
              }
            ]
          }
        ]
      },
      {
        title: 'Dönüşüm Tipi 2',
        inputTypes: [
          {
            type: InputTypeEnum.MULTISELECT,
            defaultValue: '',
            data: [
              {
                label: 'Dönüşüm Tipi 1',
                value: "1"
              },
              {
                label: 'Dönüşüm Tipi 2',
                value: "2"
              }
            ]
          }
        ]
      }
    )
  }
}
