import {ChangeDetectorRef, Component, EventEmitter, OnInit} from '@angular/core';
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bank-auth',
  templateUrl: './bank-auth.component.html',
  styleUrls: ['./bank-auth.component.scss']
})
export class BankAuthComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  head1 = true;
  head2 = false;
  head3 = false;
  head4 = false;

  saveClickEvent = new EventEmitter();
  selectedAuthForm?: FormGroup;

  constructor(
              private store: Store,
              private router: Router,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    const dataObj = {
      title: 'Banka Erişim Yetkileri',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.bankAccessAuth',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  stepClick(active: string) {
    if (active === '1') {
      this.head1 = true;
      this.head2 = false;
      this.head3 = false;
      this.head4 = false;
    } else if (active === '2') {
      this.head2 = true;
      this.head1 = false;
      this.head3 = false;
      this.head4 = false;
    } else if (active === '3') {
      this.head3 = true;
      this.head1 = false;
      this.head2 = false;
      this.head4 = false;
    } else if (active === '4') {
      this.head4 = true;
      this.head1 = false;
      this.head3 = false;
      this.head2 = false;
    }
  }

  save() {
    console.log('dsds');
    this.saveClickEvent.emit(true);
    console.log(this.selectedAuthForm);
  }

  authFormChange(authForm: any) {
    console.log(authForm);
  }
}
