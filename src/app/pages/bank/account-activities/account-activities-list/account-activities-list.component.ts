import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  OnInit,
  TemplateRef, ViewChild
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
import { ClearFilterItemAction, DeleteFilterItemAction, } from "../../../../store/filter/filter.action";
import { FilterState } from "../../../../store/filter/filter.state";
import { LabelValueType } from "../../../../models/bank/label-value.type";
import { browserRefresh } from "../../../../app.component";
import { KeyLabelValueType } from "../../../../models/shared/key-label-value.type";
import { CreateFavoriteFilterComponent } from "./create-favorite-filter/create-favorite-filter.component";
import { ModalService } from "../../../../service/modal/modal.service";

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities-list.component.html',
  styleUrls: ['./account-activities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountActivitiesListComponent implements OnInit {

  bankService = inject(BankService);
  drawerService = inject(DrawerService);
  cdr = inject(ChangeDetectorRef);
  modalService = inject(ModalService);

  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  favoriteFilters?: NzSelectOptionInterface[];
  dateFilters?: NzSelectOptionInterface[];
  filterItemCount = 0;
  browserRefresh?: boolean;
  filterItems$ = this.store.select(FilterState.getFilterItems);
  filterClearChange = new EventEmitter();
  @ViewChild(TemplateRef) templateRef?: TemplateRef<any>;

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
    this.store.select(FilterState.getFilterItemsCount).subscribe(count => {
      this.filterItemCount = count;
      this.cdr.markForCheck();
    });
    this.browserRefresh = browserRefresh;
    this.browserRefresh ? this.clearFilter() : null;
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
  }

  deleteFilterItem(key: string, item: LabelValueType) {
    const keyValueType: KeyLabelValueType = {
      key,
      value: item.value,
      label: item.label
    };
    this.filterClearChange.emit(keyValueType);
    this.store.dispatch(new DeleteFilterItemAction(key, item));
  }

  clearFilter() {
    this.store.dispatch(new ClearFilterItemAction());
    this.filterClearChange.emit(false);
  }

  openCreateFavoriteFilterModal() {
    const modalRef = this.modalService.create({
      nzContent: CreateFavoriteFilterComponent,
      nzClosable: false,
      nzFooter: null,
      nzBodyStyle: {'padding': '0', 'border-radius': '10px', 'background': '#fff'},
      nzWidth: '650px',
    });

    modalRef.afterClose.subscribe(result => console.log(result));
  }

  setRangeAndTotalValueTemplate(templateRef: TemplateRef<any>) {
    if (templateRef)
      this.templateRef = templateRef;
    console.log(this.templateRef);
  }
}
