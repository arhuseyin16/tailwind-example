import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ModalService} from "../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  visible: boolean = false;
  recordBtn: boolean = false;
  createdForm = this.fb.group({
    user: new FormControl(''),
    groupName: new FormControl(''),
    authScheme: new FormControl(''),
    module: new FormControl(''),
  });

  constructor(private store: Store,
              private router: Router,
              private modalService: ModalService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    const dataObj = {
      title: 'Kullanıcı Grubu Tanımlama',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.userGroupDefinition',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  newRecordModal() {
    this.recordBtn = true;
    this.modalService.userGroupNewRecordCreatedModal().afterClose.subscribe(res => {
      console.log(res);
      this.recordBtn = res.hoverKey;
      this.cdr.detectChanges();
    });
  }

  clear() {
    this.createdForm.reset();
  }

  filterClick() {

  }
}
