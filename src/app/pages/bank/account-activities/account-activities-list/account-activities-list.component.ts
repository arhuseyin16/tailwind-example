import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { FavoriteStateModel } from "../../../../models/favorite-state.model";
import { HeaderConfigClear } from "../../../../store/header-config/header-config.action";
import { FavoriteAction } from "../../../../store/favorite/favorite.action";
import { BankService } from "../../../../service/bank/bank.service";
import { forkJoin } from "rxjs";
import { NzSelectOptionInterface } from "ng-zorro-antd/select";
import { DrawerService } from "../../../../service/drawer/drawer.service";
import {
  AccountActivitiesListFilterComponent
} from "./account-activities-list-filter/account-activities-list-filter.component";
import { DeleteFilterItemAction, SetFilterItemsCountAction } from "../../../../store/filter/filter.action";
import { FilterState } from "../../../../store/filter/filter.state";
import { KeyValueType } from "../../../../models/shared/key-value.type";
import { LabelValueType } from "../../../../models/bank/label-value.type";

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities-list.component.html',
  styleUrls: ['./account-activities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountActivitiesListComponent implements OnInit {
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  bankService = inject(BankService);
  drawerService = inject(DrawerService);
  cdr = inject(ChangeDetectorRef);
  favoriteFilters?: NzSelectOptionInterface[];
  dateFilters?: NzSelectOptionInterface[];
  filterItemsCount = 0;
  filterItems$ = this.store.select(FilterState.getFilterItems);

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
/*    this.store.select(FilterState.getFilterItems).subscribe(items => {
      this.fi
      console.log(items);
    })*/
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
  }

  detail() {
    this.router.navigate(['ui/bank/account-activities/detail'], {queryParams: {id: 1}});
  }

  open() {
    const filterDrawerRef = this.drawerService.create({
      nzContent: AccountActivitiesListFilterComponent,
      nzPlacement: 'top',
      nzClosable: false,
      nzHeight: '100%',
    });
    // Tekrardan bakılacak.
    filterDrawerRef.afterClose.subscribe((param) => {
      this.filterItemsCount = param?.filterItemsCount;
      this.cdr.detectChanges();
    });
  }

  deleteFilterItem(key: string, item: LabelValueType) {
     this.store.dispatch(new DeleteFilterItemAction(key, item));
  }
}
