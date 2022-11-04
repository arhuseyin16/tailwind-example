import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {HeaderConfigAction, HeaderConfigClear} from "../../../store/header-config/header-config.action";
import {HeaderConfigModel} from "../../../models/header-config-model";
import {FavoriteStateModel} from "../../../models/favorite-state.model";
import {Router} from "@angular/router";
import {FavoriteAction} from "../../../store/favorite/favorite.action";
import {ModalService} from "../../../service/modal-service/modal.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  visible: boolean = false;
  recordBtn: boolean = false;
  synchronizationBtn: boolean = false;
  createdForm = this.fb.group({
    currenciesHistory: new FormControl('', Validators.required),
    creationStartDate: new FormControl('', Validators.required),
    creationEndDate: new FormControl('', Validators.required),
    updateStartDate: new FormControl('', Validators.required),
    updateEndDate: new FormControl('', Validators.required),
    rateType: new FormControl(''),
    sourceCurrency: new FormControl(''),
    targetCurrency: new FormControl(''),
  });

  constructor(private store: Store,
              private router: Router,
              private modalService: ModalService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef
  ) {
    const dataObj = {
      title: 'Döviz Kurları',
    }
    this.headerConfig.push({
      component: () => import('../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.exchange',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  newRecordModal() {
    this.recordBtn = true;
    this.modalService.exchangeNewRecordCreatedModal().afterClose.subscribe(res => {
      console.log(res);
      this.recordBtn = res.hoverKey;
      this.cdr.detectChanges();
    });
  }

  change(value: boolean): void {
    console.log(value);
  }

  synchronizationModal() {
    this.synchronizationBtn = true;
    this.modalService.synchronizationModal().afterClose.subscribe(res => {
      console.log(res);
      this.synchronizationBtn = res.hoverKey;
      this.cdr.detectChanges();
    });
  }
}
