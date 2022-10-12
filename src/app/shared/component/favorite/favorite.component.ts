import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {FavoriteState} from "../../../store/favorite/favorite.state";
import {Observable} from "rxjs";
import {FavoriteListStateModel} from "../../../models/favorite-state.model";
import {FavoriteListState} from "../../../store/favorite/favorite-list.state";
import {FavoriteListAction} from "../../../store/favorite/favorite-list.action";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, AfterViewInit {
  @Select(FavoriteState.getFavorite) favoriteConfig$?: Observable<any>;
  favoriteList: FavoriteListStateModel[] = [];
  favoriteView = false;
  favoritePage = false;
  statePage: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.favoriteConfig$?.subscribe(state => {
      this.statePage = state.model;
      this.favoriteList = this.store.selectSnapshot(FavoriteListState.getFavorite).list;
      if (state.model && this.favoriteList.length > 0) {
        this.favoritePage = false;
        this.favoriteList.map(row => {
          if (row.url === state.model.url) {
            this.favoritePage = true;
          }
        });
      }
    });
  }

  change() {
    let list = [] as any;
    if (this.favoritePage) {
      list.push(...this.favoriteList, {
        name: this.statePage.name,
        url: this.statePage.url,
        status: true
      });
    } else {
      list = [...this.favoriteList];
      this.favoriteList.forEach((row, index) => {
        if (row.url === this.statePage.url) {
          list.splice(index, 1);
        }
      });
    }
    this.store.dispatch(new FavoriteListAction(list));
    this.favoriteList = this.store.selectSnapshot(FavoriteListState.getFavorite).list;
    this.favoriteView = !this.favoriteView;
  }

  favoriteImageClick() {
    this.favoriteView = !this.favoriteView;
  }
}
