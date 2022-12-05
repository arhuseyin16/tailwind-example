import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {ModalService} from "../../../../service/modal-service/modal.service";
import {FormBuilder} from "@angular/forms";
import {HeaderConfigModel} from "../../../../models/header-config-model";
import {FavoriteStateModel} from "../../../../models/favorite-state.model";
import {HeaderConfigAction} from "../../../../store/header-config/header-config.action";
import {FavoriteAction} from "../../../../store/favorite/favorite.action";

@Component({
  selector: 'app-tag-management',
  templateUrl: './tag-management.component.html',
  styleUrls: ['./tag-management.component.scss']
})
export class TagManagementComponent implements OnInit {
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  recordBtn: boolean = false;

  constructor(private store: Store,
              private router: Router,
              private modalService: ModalService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
    const dataObj = {
      title: 'Tag Yönetimi',
    }
    this.headerConfig.push({
      component: () => import('../../../../shared/component/header-title/header-title.component').then(it => it.HeaderTitleComponent),
      dataObj: dataObj
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'sidebar.tag-management',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));
  }

  ngOnInit(): void {
  }

  newRecordModal() {
    this.recordBtn = true;
    this.modalService.tagNewRecordCreatedModal().afterClose.subscribe(res => {
      console.log(res);
      this.recordBtn = res.hoverKey;
      this.cdr.detectChanges();
    });
  }
}
