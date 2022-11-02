import { Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { FavoriteStateModel } from "../../../../models/favorite-state.model";
import { HeaderConfigClear } from "../../../../store/header-config/header-config.action";
import { FavoriteAction } from "../../../../store/favorite/favorite.action";
import { BankService } from "../../../../service/bank/bank.service";
import { forkJoin } from "rxjs";
import { NzSelectOptionInterface } from "ng-zorro-antd/select";

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
  }

  detail() {
    this.router.navigate(['ui/bank/account-activities/detail'], {queryParams: {id: 1}});
  }

}
